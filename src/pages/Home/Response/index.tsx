import React, { useEffect, useState } from 'react';

import livro from '../../../assets/livro.jpg';

import { getResponse } from '../../../services/api';

import { Container } from './styles';

interface Props {
  codEan: string;
}

interface RepoProps {
  id: string;
  name: string;
  coverUrl: string;
  rating: number;
  promotionalPrice: number;
  price: number;
}

const Response: React.FC<Props> = ({ codEan }) => {
  const [repoData, setRepoData] = useState<RepoProps[]>([]);

  useEffect(() => {
    // const loadResponse = async () => {
    //   const books = getResponse(codEan);
    //   console.log('rescaraio', books);
    //   // await setRepoData(books);
    // };

    getResponse(codEan).then(res => {
      console.log(res.data);
      setRepoData(res.data);
    });

    // loadResponse();
  }, [codEan]);

  console.log(codEan);
  return (
    <Container>
      <h1>Response</h1>
    </Container>
  );
};

export default Response;
