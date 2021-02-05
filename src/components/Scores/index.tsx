import React from 'react';
import { calculateScore } from '../../utils/calculateScore';

import { Container, Score, Value } from './styles';

const Scores: React.FC = () => {
  return (
    <Container>
      <Score scoreColor={calculateScore(2.5).color}>
        <Value scoreColor={calculateScore(2.5).color}>
          <span>{3.5}</span>
        </Value>
        <span>Tradução</span>
      </Score>
      <Score scoreColor={calculateScore(2.5).color}>
        <Value scoreColor={calculateScore(2.5).color}>
          <span>{3.5}</span>
        </Value>
        <span>Tradução</span>
      </Score>
      <Score scoreColor={calculateScore(2.5).color}>
        <Value scoreColor={calculateScore(2.5).color}>
          <span>{3.5}</span>
        </Value>
        <span>Tradução</span>
      </Score>
      <Score scoreColor={calculateScore(2.5).color}>
        <Value scoreColor={calculateScore(2.5).color}>
          <span>{3.5}</span>
        </Value>
        <span>Tradução</span>
      </Score>
    </Container>
  );
};

export default Scores;
