import clsx from 'clsx';
import {flattenConnection, Image} from '@shopify/hydrogen';

import {Text} from '@h2/Text';
import Link from '@h2/Link';
import {Button, AddToCartButton} from '@h2/Button';
import {Price, PriceCompareAt} from './Price';

export function ProductCard({product, className, loading, onClick, quickAdd}) {
  product = {
    handle: 'builders-tote',
    title: 'Builders Tote',
    variants: {
      nodes: [
        {
          availableForSale: true,
          price: {
            amount: '38.00',
            currencyCode: 'CAD',
          },
          compareAtPrice: {
            amount: '42.00',
            currencyCode: 'CAD',
          },
          image: {
            id: 'gid://Shopify/placeholder/1234',
            altText: 'Placeholder',
            height: '600',
            width: '400',
            url: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png',
          },
        },
      ],
    },
  };

  if (!product?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(product.variants)[0];

  if (!firstVariant) return null;
  const {image} = firstVariant;

  return (
    <div className="flex flex-col gap-2">
      <Link
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="viewport"
      >
        <div className={clsx('grid gap-4', className)}>
          <div className="card-image aspect-[4/5] bg-primary/5">
            {image && (
              <Image
                className="object-cover w-full fadeIn"
                sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                aspectRatio="4/5"
                data={image}
                alt={image.altText || `Picture of ${product.title}`}
                loading={loading}
              />
            )}
          </div>
          <div className="grid gap-1">
            <Text
              className="w-full overflow-hidden whitespace-nowrap text-ellipsis "
              as="h3"
            >
              {product.title}
            </Text>
            <div className="flex gap-4">
              <Text className="flex gap-4">
                <Price variant={firstVariant} />
                <PriceCompareAt className="opacity-80" variant={firstVariant} />
              </Text>
            </div>
          </div>
        </div>
      </Link>
      {quickAdd && firstVariant.availableForSale && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="secondary"
          className="mt-2"
        >
          <Text as="span" className="flex items-center justify-center gap-2">
            Add to Cart
          </Text>
        </AddToCartButton>
      )}
      {quickAdd && !firstVariant.availableForSale && (
        <Button variant="secondary" className="mt-2" disabled>
          <Text as="span" className="flex items-center justify-center gap-2">
            Sold out
          </Text>
        </Button>
      )}
    </div>
  );
}
