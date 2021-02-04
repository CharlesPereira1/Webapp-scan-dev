import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  h4 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 5px;
  }

  .price {
    color: ${colors.metalDark};

    span {
      text-decoration: line-through;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;

    h4 {
      font-size: 16px;
    }
  }
`;

export const Cover = styled.img`
  height: 220px;
  margin: auto;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150px;
  }
`;
