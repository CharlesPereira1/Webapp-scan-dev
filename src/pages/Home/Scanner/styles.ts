import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const Video = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;

  canvas {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  img {
    margin-bottom: 30px;
  }
`;

export const ScanMarker = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 260px;
    height: 260px;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    font-style: italic;
    margin-top: 20px;
  }
`;
