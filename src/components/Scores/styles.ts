import styled from 'styled-components';

interface ScoresProps {
  scoreColor: string;
}

export const Container = styled.div``;

export const Score = styled.div<ScoresProps>``;

export const Value = styled.div<ScoresProps>``;
