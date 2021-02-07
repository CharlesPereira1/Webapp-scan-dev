import styled from 'styled-components';
import { colors } from '../../styles/theme';

interface ScoresProps {
  scoreColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Score = styled.div<ScoresProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-right: 10px;

  span {
    color: ${props => props.scoreColor};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Value = styled.div<ScoresProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${props => props.scoreColor};
  border-radius: 50px;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  span {
    color: ${colors.white};
  }
`;
