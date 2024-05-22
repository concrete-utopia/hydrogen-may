import {Heading, Text} from '@h2/Text';
import {Flex, Grid, Section} from '@h2/new/Layout';
import {Image} from '@shopify/hydrogen';

export default function Features() {
  return (
    <Section className="text-white bg-darkGray">
      <Flex direction="down" gap={9}>
        <Grid columns={9}>
          <div className="col-span-2">
            <Heading>01</Heading>
          </div>
          <div className="col-span-3">
            <Heading>Type at lightning speed</Heading>
            <Text>
              Type at lightning speed Build faster than ever with the Shopify
              Keyboard thanks to its ultra-slim design, featuring low-profile
              switches (0.2 ms latency). These switches are 31% thinner than
              those found on average mechanical keyboards, allowing you to type,
              work, and play faster.
            </Text>
            <Text>
              Listen to the smooth sound of the Gatreon low-profile red switch.
            </Text>
          </div>
          <div className="col-span-3 col-start-7">
            <Image />
          </div>
        </Grid>
        <Grid columns={9}>
          <div className="col-span-2">
            <Heading>02</Heading>
          </div>
          <div className="col-span-3">
            <Heading>Illuminate your work station</Heading>
            <Text>
              Pair your keyboard’s backlights with your preferences. Whether
              you’re coding, gaming, or creating—adjust the hue, saturation, and
              brightness of your backlight using a range of over 22 dynamic RGB
              settings.
            </Text>
          </div>
          <div className="col-span-3 col-start-7">
            <Image />
          </div>
        </Grid>
        <Grid columns={9}>
          <div className="col-span-2">
            <Heading>03</Heading>
          </div>
          <div className="col-span-3">
            <Heading>Wired or wireless? Connect your way</Heading>
            <Text>
              Whether you’re updating inventory on your laptop or shipping code
              on your desktop—seamlessly transition between platforms. The
              Shopify Keyboard can pair with up to 3 Bluetooth devices, but if
              you prefer to connect via cable, make the switch in seconds with
              the toggle function. Whatever your preference, experience a
              keyboard that adapts to your needs.
            </Text>
          </div>
          <div className="col-span-3 col-start-7">
            <Image />
          </div>
        </Grid>
      </Flex>
    </Section>
  );
}
