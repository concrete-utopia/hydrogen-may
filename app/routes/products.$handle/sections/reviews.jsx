import {Container} from '@h2/new/Layout';
import {Heading, Text} from '@h2/Text';
import {Button} from '@h2/Button';

export default function Reviews() {
  return (
    <section>
      <Container>
        <div>
          <Heading>Don’t take our word for it</Heading>
          <div>
            <Text>4.8 — 385 Reviews</Text>
            <Button>View all reviews</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
