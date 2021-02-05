import React from 'react';
import { calculateScore } from '../../utils/calculateScore';

import { Container, Score, Value } from './styles';

interface ScoresProps {
  scores: [
    {
      name: string;
      value: number;
    },
  ];
}

const Scores: React.FC<ScoresProps> = ({ scores }) => {
  return (
    <Container>
      {scores?.map(data => (
        <Score key={data.name} scoreColor={calculateScore(data.value).color}>
          <Value scoreColor={calculateScore(data.value).color}>
            <span>{data.value}</span>
          </Value>
          <span>{data.name}</span>
        </Score>
      ))}
    </Container>
  );
};

export default Scores;
