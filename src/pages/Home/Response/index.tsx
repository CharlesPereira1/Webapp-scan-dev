import React from 'react';

import livro from '../../../assets/livro.jpg';

import { Container } from './styles';

interface Props {
  codEan: string;
}

const Response: React.FC<Props> = ({ codEan }) => {
  console.log(codEan);
  return (
    <Container>
      <h1>Response</h1>
    </Container>
  );
};

export default Response;
