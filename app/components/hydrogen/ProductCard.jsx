import {flattenConnection, Image} from '@shopify/hydrogen';

import {Button, AddToCartButton} from '@h2/new/Button';
import {cx} from '@h2/new/utils';
import {Flex, Grid} from '@h2/new/Layout';
import {Heading, Text} from '@h2/new/Text';
import {Price, PriceCompareAt} from '@h2/Price';
import Link from '@h2/Link';

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
    <div className={cx('flex flex-col gap-2', className)}>
      <Link
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="viewport"
      >
        <Grid gap={4}>
          <div className="card-image aspect-[4/5] bg-offWhite">
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
          <Grid gap={1} justify="start">
            <Heading truncate size={3} weight="medium" as="h3">
              {product.title}
            </Heading>
            <Flex gap={3} justify="start" align="baseline">
              <Price
                color="black"
                className="opacity-60"
                as={Text}
                variant={firstVariant}
              />
              <PriceCompareAt
                as={Text}
                color="black"
                className="opacity-60"
                variant={firstVariant}
              />
            </Flex>
          </Grid>
        </Grid>
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
