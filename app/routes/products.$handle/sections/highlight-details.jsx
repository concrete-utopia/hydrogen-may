import {Container, Section} from '@h2/Section';
import {Heading} from '~/components/hydrogen/Text';

export default function HighlightDetails() {
  return (
    <Section className="bg-darkGray items-center text-white relative min-h-[40vw]">
      <Container>
        <div className="grid grid-cols-2">
          <div className="gap-8 grid">
            <div className="grid gap-4">
              <Heading>Materials and care</Heading>
              <ul>
                <li>Recycled cotton tote.</li>
                <li>Machine wash cold. Hang dry.</li>
              </ul>
            </div>
            <div>
              <Heading>Size</Heading>
              <ul>
                <li>16&quot; W x 15.5&quot; H x 3&quot; bottom gusst. </li>
                <li>10&quot; handle drop length.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full absolute h-full flex pointer-events-none">
        <div className="w-full h-full"></div>
        <div className="w-full h-full bg-accent"></div>
      </div>
    </Section>
  );
}
