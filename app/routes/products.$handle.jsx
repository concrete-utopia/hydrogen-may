import {Suspense} from 'react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Await, Link, useLoaderData} from '@remix-run/react';
import {
  Image,
  Money,
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
import {getVariantUrl} from '~/lib/variants';

export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data?.product.title ?? ''}`}];
};

export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;

  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions: getSelectedProductOptions(request)},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  // TODO: Package up all this stuff into a utility function
  // setDefaultSelectedVariant(product, 'first'); Also handle "available" for first available variant as well
  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) => option.name === 'Title' && option.value === 'Default Title',
    ),
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    if (!product.selectedVariant) {
      throw function ({product, request}) {
        const url = new URL(request.url);
        const firstVariant = product.variants.nodes[0];

        return redirect(
          getVariantUrl({
            pathname: url.pathname,
            handle: product.handle,
            selectedOptions: firstVariant.selectedOptions,
            searchParams: new URLSearchParams(url.search),
          }),
          {
            status: 302,
          },
        );
      };
    }
  }
  // END TODO

  const variants = storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  return defer({product, variants});
}

export default function Product() {
  /** @type {LoaderReturnData} */
  const {product, variants} = useLoaderData();
  const {selectedVariant, title, descriptionHtml} = product;
  return (
    <div className="product">
      <div className="product-image">
        <Image
          alt={selectedVariant?.image.altText || 'Product Image'}
          aspectRatio="1/1"
          data={selectedVariant?.image}
          key={selectedVariant?.image.id}
          sizes="(min-width: 45em) 50vw, 100vw"
        />
      </div>
      <div className="product-main">
        <h1>{title}</h1>

        <div className="product-price">
          {selectedVariant?.compareAtPrice ? (
            <>
              <p>Sale</p>

              <div className="product-price-on-sale">
                {selectedVariant ? (
                  <Money data={selectedVariant.price} />
                ) : null}
                <s>
                  <Money data={selectedVariant.compareAtPrice} />
                </s>
              </div>
            </>
          ) : (
            selectedVariant?.price && <Money data={selectedVariant?.price} />
          )}
        </div>

        <Suspense
          fallback={
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={[]}
            />
          }
        >
          <Await
            errorElement="There was a problem loading product variants"
            resolve={variants}
          >
            {(data) => (
              <ProductForm
                product={product}
                selectedVariant={selectedVariant}
                variants={data.product?.variants.nodes || []}
              />
            )}
          </Await>
        </Suspense>
        <p>
          <strong>Description</strong>
        </p>
        <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
      </div>
    </div>
  );
}

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
function ProductForm({product, selectedVariant, variants}) {
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => (
          <div className="product-options" key={option.name}>
            <h5>{option.name}</h5>
            <div className="product-options-grid">
              {option.values.map(({value, isAvailable, isActive, to}) => {
                return (
                  <Link
                    className="product-options-item"
                    key={option.name + value}
                    prefetch="intent"
                    preventScrollReset
                    replace
                    to={to}
                    style={{
                      border: isActive
                        ? '1px solid black'
                        : '1px solid transparent',
                      opacity: isAvailable ? 1 : 0.3,
                    }}
                  >
                    {value}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </VariantSelector>

      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          window.location.href = window.location.href + '#cart-aside';
        }}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]
            : []
        }
      >
        {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}

/***********************
 * ELEMENTS: TODO: Abstract
 ***********************/

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: CartLineInput[];
 *   onClick?: () => void;
 * }}
 */
function AddToCartButton({analytics, children, disabled, lines, onClick}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

/***********************
 * DATA
 ***********************/

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const VARIANTS_QUERY = `#graphql
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
  ${PRODUCT_VARIANTS_FRAGMENT}
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantsQuery} ProductVariantsQuery */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineInput} CartLineInput */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').SelectedOption} SelectedOption */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
