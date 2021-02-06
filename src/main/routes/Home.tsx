import { Typography } from '@material-ui/core';
import React from 'react';
import Hero from '../components/Hero';
import PhotoGrid from '../components/PhotoGrid';
import ServiceCards from '../components/ServiceCards';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <PhotoGrid />
      <Typography variant="h3" component="h2">
        Services
      </Typography>
      <ServiceCards />
    </>
  );
};

export default Home;
