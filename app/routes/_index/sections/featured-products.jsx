import {Button} from '@h2/Button';
import {Heading, Text} from '@h2/new/Text';
import {Background, Flex, Grid, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';
import {Price, PriceCompareAt} from '@h2/Price';
import {cx} from '@h2/new/utils';

function SaleCard({className, ...props}) {
  return (
    <div className={cx('relative', className)} {...props}>
      <Flex
        direction="down"
        align="center"
        justify="center"
        gap={6}
        position="relative"
        className="z-10"
        p={8}
        {...props}
      >
        {props.children}
      </Flex>
      <Background justify="center" align="center">
        <Heading
          color="white"
          uppercase
          className="text-[25rem] z-0 absolute left-1/2 -translate-x-1/2"
          align="center"
        >
          Sale
        </Heading>
      </Background>
    </div>
  );
}

function SaleBadge({variant}) {
  return (
    <Flex
      direction="down"
      gap={2}
      align="center"
      justify="center"
      className="absolute top-0 right-0 w-40 pb-4 text-center translate-x-16 translate-y-16 bg-white rounded-full rotate-12 shadow-badge aspect-square"
    >
      <PriceCompareAt
        align="center"
        as={Heading}
        className="opacity-40"
        size={3}
        variant={variant}
        withoutTrailingZeros
      />
      <Price
        align="center"
        as={Heading}
        size={4}
        variant={variant}
        withoutTrailingZeros
      />
    </Flex>
  );
}

export default function FeaturedProducts() {
  return (
    <Section>
      <Grid columns={2} gap={0} justify="stretch">
        <SaleCard className="bg-lightGray">
          <div className="relative">
            <SaleBadge variant={null} />
            <Image
              aspectRatio="1/1"
              crop="center"
              width={380}
              src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
            />
          </div>
          <Flex gap={4} direction="down" align="center" justify="center">
            <Heading size={4}>Builders Tote</Heading>
            <Text width="narrow">
              Sofie Pavitt Face is an intentional edit of skincare essentials
              designed for acne-prone skin.
            </Text>
          </Flex>
          <Button color="accent">Add to cart</Button>
        </SaleCard>
        <div className="h-full bg-black">
          <Image
            className="object-cover h-full"
            width={633}
            height={555}
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
          />
        </div>
      </Grid>
      <Grid columns={2} gap={0}>
        <div className="h-full bg-black">
          <Image
            className="object-cover h-full"
            width={633}
            height={555}
            src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
          />
        </div>
        <SaleCard className="bg-accent">
          <div className="relative">
            <Flex
              direction="down"
              gap={2}
              align="center"
              justify="center"
              className="absolute top-0 right-0 w-40 pb-4 text-center translate-x-16 translate-y-16 bg-white rounded-full rotate-12 shadow-card aspect-square"
            >
              <PriceCompareAt
                as={Heading}
                size={3}
                align="center"
                className="opacity-40"
                withoutTrailingZeros
              />
              <Price
                as={Heading}
                size={4}
                align="center"
                withoutTrailingZeros
              />
            </Flex>
            <Image
              aspectRatio="1/1"
              crop="center"
              width={380}
              src="https://cdn.shopify.com/s/files/1/0657/3811/3197/files/builders-tote.png"
            />
          </div>
          <Flex gap={4} direction="down" align="center" justify="center">
            <Heading size={4}>Builders Tote</Heading>
            <Text width="narrow">
              Sofie Pavitt Face is an intentional edit of skincare essentials
              designed for acne-prone skin.
            </Text>
          </Flex>
          <Button>Add to cart</Button>
        </SaleCard>
      </Grid>
    </Section>
  );
}
