import {Money} from '@shopify/hydrogen';
import {cx} from './new/cva.config';

export function Price({variant, ...props}) {
  return <Money data={variant.price} {...props} />;
}

export function isDiscounted(price, compareAtPrice) {
  if (compareAtPrice?.amount > price?.amount) {
    return true;
  }
  return false;
}

export function PriceCompareAt({variant, ...props}) {
  return isDiscounted(variant.price, variant.compareAtPrice) ? (
    <span className={cx('strike', props.className)}>
      <Money data={variant.compareAtPrice} {...props} />
    </span>
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
