import React from 'react';

import { Content } from './styles';

interface BookProps {
  book: {
    tecnologies: string[];
    requeriments: string[];
    descriptions: string;
  };
}

const Extra: React.FC<BookProps> = ({ book }) => {
  return (
    <>
      <Content>
        <span>Tecnologias:</span>
        <p>{book.tecnologies && book.tecnologies.join(', ')}</p>
      </Content>
      <Content>
        <span>Requisitos:</span>
        <p>{book.requeriments && book.requeriments.join(', ')}</p>
      </Content>
      <Content>
        <span>Descrição:</span>
        <p>{book.descriptions}</p>
      </Content>
    </>
  );
};

export default Extra;
