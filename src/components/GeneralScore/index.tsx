import React from 'react';

import { calculateScore } from '../../utils/calculateScore';

import { Score, Description } from './styles';

interface ScoreProps {
  scorie: number;
}

const GeneralScore: React.FC<ScoreProps> = ({ scorie }) => {
  const { color, label, recommended } = calculateScore(scorie);

  return (
    <>
      <Score scoreColor={color}>
        <span className="score-value">{scorie}</span>
        <span>{label}</span>
      </Score>
      {recommended && <Description>Recomendado pelos editores</Description>}
    </>
  );
};

export default GeneralScore;
