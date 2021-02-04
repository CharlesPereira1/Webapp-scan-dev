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
    getResponse(codEan).then(res => {
      console.log(res.data);
      setRepoData(res.data);
    });

    // loadResponse();
  }, [codEan]);

  console.log(codEan);
  return (
    <Container>
      <Link to="/book-details/">
        <Wrapper>
          <Cover src="https://m.media-amazon.com/images/I/41IiBTZOGCL.jpg" />
          <Info>
            <h4>Habilidades Práticas do Agile Software</h4>
            <div>
              <StarRatings
                rating={4.5}
                starRatedColor={colors.yellow}
                starDimension="18"
                starSpacing="0"
              />
              {'  '}
              (4.5)
            </div>

            <div className="price">
              <span>R$ 99,90</span>
              {'  '}
              por
              {'  '}
              <strong>R$ 48,98</strong>
            </div>
          </Info>
          <ButtonClick>
            <MdArrowForward size={32} color={colors.white} />
          </ButtonClick>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Response;
