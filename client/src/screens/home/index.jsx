import { Heading, Link } from 'evergreen-ui';
import React from 'react';

import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Heading size={900}>Coming Soon...</Heading>
      <Link href="/auth/signin">Signin</Link>
      <Link href="/auth/signup">Signup</Link>
      <Link href="/admin">Dashboard</Link>
    </div>
  );
};

export default Home;
