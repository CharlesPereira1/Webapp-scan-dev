import styled from 'styled-components';
import { colors } from '../../styles/theme';

interface EscoreProps {
  scoreColor: string;
}

export const Score = styled.div<EscoreProps>`
  margin-top: 20px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${props => props.scoreColor};
  border-radius: 100px;
  height: 200px;
  width: 200px;

  font-size: 22px;
  font-weight: bold;
  text-align: center;

  .score-value {
    font-size: 80px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: ${colors.metal};
  margin-top: 5px;
`;
