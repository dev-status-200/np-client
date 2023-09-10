import React from 'react';
import Featured from './Featured';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const DynamicHero = dynamic(() => import('./Hero'), {
  loading: () => <p>Loading...</p>,
})

const Desktop = () => {
  return (
    <>
      <DynamicHero/>
      <Container>
        <Featured/>
      </Container>
    </>
  )
}

export default Desktop
