import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import { getResponse } from '../../services/api';
import { RepoProps } from '../Home/Response';
import GeneralScore from '../../components/GeneralScore';
import Scores from '../../components/Scores';

import { colors } from '../../styles/theme';
import { Container, Cover } from './styles';
import Extra from '../../components/Extra';

interface Props {
  ean: string;
}

const Details: React.FC = () => {
  const [books, setBooks] = useState<RepoProps>({} as RepoProps);

  const { ean } = useParams<Props>();

  useEffect(() => {
    getResponse(ean).then(res => {
      setBooks(res.data);
    });
  }, [ean]);

  return (
    <Container>
      <Cover src={books?.coverUrl} />
      <h4>{books?.name}</h4>
      <div>
        <StarRatings
          rating={books?.rating}
          starRatedColor={colors.yellow}
          starDimension="18"
          starSpacing="0"
        />{' '}
        ({books?.rating})
      </div>
      <div className="price">
        <span>R$ {books?.price} </span> por R$ {books?.promotionalPrice}
      </div>
      <GeneralScore scorie={books?.score} /> {/* {books?.score as number} */}
      <Scores scores={books.scores} />
      <Extra book={books} />
    </Container>
  );
};

export default Details;
