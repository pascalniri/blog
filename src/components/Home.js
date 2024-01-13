import React from 'react'

import Header from '../components/Header';
import Body from '../components/Body';
import Grid from '../components/Grid';
import Signin from '../components/Signin';

const Home = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Grid/>
      <Signin/>
    </div>
  )
}

export default Home