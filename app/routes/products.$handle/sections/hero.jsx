import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {Image, VariantSelector} from '@shopify/hydrogen';
import {AddToCartButton} from '@h2/Button';
import {Heading, Text} from '@h2/Text';
import {Price, PriceCompareAt} from '@h2/Price';
import {ShopPayButton} from '@h2/ShopPayButton';

export default function Hero() {
  const {product} = useLoaderData();
  const {selectedVariant} = product;
  return (
    <section className="relative w-full p-4">
      <div className="z-20 relative h-full">
        <div>
          <div className={'grid grid-cols-2 py-16'}>
            <div className="product-image">
              <Image
                alt={selectedVariant?.image.altText || 'Product Image'}
                aspectRatio="1/1"
                data={selectedVariant?.image}
                key={selectedVariant?.image.id}
                sizes="(min-width: 45em) 50vw, 100vw"
              />
            </div>
            <div className="flex items-center justify-center">
              <ProductSummary />
            </div>
          </div>
        </div>
      </div>
      <div
        id="hero-background"
        className="z-10 absolute pointer-events-none top-0 left-0 w-full h-full flex"
      >
        <div className="bg-accent w-full h-full"></div>
        <div className="bg-lightGray w-full h-full"></div>
      </div>
    </section>
  );
}

function ProductSummary() {
  const {product, variants} = useLoaderData();
  const {selectedVariant, title, description} = product;

  return (
    <div
      id="product-summary"
      className="rounded-card max-w-[28rem] overflow-hidden bg-white shadow-card"
    >
      <div id="product-info" className="grid gap-4 px-10 min-h-80 py-8">
        <Heading id="product-info-title">{title}</Heading>

        <div id="product-info-content" className="grid gap-3">
          <div id="product-price" className="flex gap-4">
            <Price variant={selectedVariant} />
            <PriceCompareAt className="strike" variant={selectedVariant} />
          </div>
          <Text id="product-description">{description}</Text>
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
      </div>
      <div
        id="product-details"
        className="bg-lighterGray flex flex-col content-center gap-4 px-10 min-h-80 py-8"
      >
        <div className="grid gap-3">
          <div className="flex gap-3">
            {/* <IconBox /> */}
            <Text>
              Receive it by{' '}
              <strong className="font-medium">{businessDaysFromNow(7)}</strong>
            </Text>
          </div>
          <div className="flex gap-3">
            {/* <IconShipping /> */}
            <Text>Free shipping over $50</Text>
          </div>
          <div className="flex gap-3">
            {/* <IconReturns /> */}
            <Text>Free 30-day returns</Text>
          </div>
        </div>
        <div className="">
          <div className=" h-12 border-t border-primary/10 flex justify-between items-center">
            <Text>Materials</Text>
            <Text>+</Text>
          </div>
          <div className=" h-12 border-t border-primary/10 flex justify-between items-center">
            <Text>Care Instructions</Text>
            <Text>+</Text>
          </div>
          <div className=" h-12 border-t border-primary/10 flex justify-between items-center">
            <Text>Fit</Text>
            <Text>+</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

function businessDaysFromNow(days) {
  let date = new Date();
  let addedDays = 0;

  while (addedDays < days) {
    date.setDate(date.getDate() + 1);

    // Check if the current day is a weekday (Monday-Friday)
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // 0 = Sunday, 6 = Saturday
      addedDays++;
    }
  }

  return formatDate(date);
}

function formatDate(date) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let dayName = daysOfWeek[date.getDay()];
  let monthName = months[date.getMonth()];
  let day = date.getDate();

  return `${dayName}, ${monthName} ${day}`;
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

      <div className="flex gap-3">
        <ShopPayButton
          className="w-full flex items-center justify-center"
          variant={selectedVariant}
        />

        <AddToCartButton
          color="accent"
          className="w-full"
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
    </div>
  );
}
