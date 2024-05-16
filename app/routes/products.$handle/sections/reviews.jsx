import React from 'react'
import {Container} from '/app/components/hydrogen/new/Layout';
import {Heading, Text} from '/app/components/hydrogen/Text';
import {Button} from '/app/components/hydrogen/Button';

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
