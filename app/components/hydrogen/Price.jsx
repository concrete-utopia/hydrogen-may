import {Money} from '@shopify/hydrogen';
import {cx} from '@h2/new/utils';
import {Text} from '@h2/new/Text';

export function Price({variant, as = Text, ...props}) {
  return <Money data={variant.price} as={as} {...props} />;
}

export function isDiscounted(price, compareAtPrice) {
  if (compareAtPrice?.amount > price?.amount) {
    return true;
  }
  return false;
}

export function PriceCompareAt({variant, as = Text, className, ...props}) {
  return isDiscounted(variant.price, variant.compareAtPrice) ? (
    <Money
      as={as}
      className={cx('strike', className)}
      data={variant.compareAtPrice}
      {...props}
    />
  ) : null;
}

export function PriceRange({
  as: Component = 'span',
  product,
  separator = '-',
  className,
  ...props
}) {
  const {minVariantPrice, maxVariantPrice} = product.priceRange;

  if (!minVariantPrice || !maxVariantPrice) {
    return null;
  }

  return (
    <Component {...props}>
      <Money data={minVariantPrice} />
      {` ${separator} `}
      <Money data={maxVariantPrice} />
    </Component>
  );
}
