import React, { useCallback, useState } from 'react';

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
        <span>{recommended}</span>
      </Score>
      {recommended && <Description>{label}</Description>}
    </>
  );
};

export default GeneralScore;
