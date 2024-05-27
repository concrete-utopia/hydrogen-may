import {flattenConnection, Image} from '@shopify/hydrogen';

import {Button, AddToCartButton} from '@h2/new/Button';
import {cx} from '@h2/new/utils';
import {Flex, Grid} from '@h2/new/Layout';
import {Heading, Text} from '@h2/new/Text';
import {Price, PriceCompareAt} from '@h2/Price';
import Link from '@h2/Link';

export function ProductCard({product, className, loading, onClick, quickAdd}) {
  if (!product?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(product.variants)[0];

  if (!firstVariant) return null;
  const {image} = firstVariant;

  return (
    <div className={cx('flex w-full flex-col gap-2', className)}>
      <Link
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="viewport"
      >
        <Flex direction="down" gap={4} resizeX="fill">
          <div className="aspect-[4/5] bg-offWhite w-full">
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
            <Heading font="text" truncate size={3} weight="medium" as="h3">
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
        </Flex>
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
