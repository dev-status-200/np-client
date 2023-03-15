import React from 'react';
import Featured from './Featured';
import Hero from './Hero';
import { Container } from 'react-bootstrap';

const Desktop = () => {
  return (
    <div>
      <Hero/>
      <Container>
        <Featured/>
      </Container>
    </div>
  )
}

export default Desktop
