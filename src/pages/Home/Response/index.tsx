import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

import { getResponse } from '../../../services/api';
import { colors } from '../../../styles/theme';

import { Container, Wrapper, Cover, Info, ButtonClick } from './styles';

interface Props {
  codEan: string;
}

export interface ScoresProps {
  name: string;
  value: number;
}

export interface RepoProps {
  id: string;
  name: string;
  coverUrl: string;
  rating: number;
  promotionalPrice: number;
  price: number;
  score: number;
  scores: [ScoresProps];
}

const Response: React.FC<Props> = ({ codEan }) => {
  const [books, setBooks] = useState<RepoProps>();

  useEffect(() => {
    getResponse(codEan).then(res => {
      setBooks(res.data);
    });
  }, [codEan]);

  return (
    <Container>
      {books && (
        <Link to={`/book-details/${codEan}`}>
          <Wrapper>
            <Cover src={books?.coverUrl} />
            <Info>
              <h4>{books?.name}</h4>
              <div>
                <StarRatings
                  rating={books?.rating}
                  starRatedColor={colors.yellow}
                  starDimension="18"
                  starSpacing="0"
                />
                {'  '}({books?.rating})
              </div>

              <div className="price">
                <span>R$ {books?.price} </span>
                por R$ {books?.promotionalPrice}
              </div>
            </Info>
            <ButtonClick>
              <MdArrowForward size={32} color={colors.white} />
            </ButtonClick>
          </Wrapper>
        </Link>
      )}
    </Container>
  );
};

export default Response;
