import React, { useState } from 'react';

import Scanner from './Scanner';
import Response from './Response';

const Home: React.FC = () => {
  const [ean, setEan] = useState('9878548795421');

  const onScan = () => {
    console.log('onscan');
  };
  return (
    <>
      <Scanner />
      <Response codEan={ean} />
    </>
  );
};

export default Home;
