import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;

  background: ${colors.white};
  border-radius: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Cover = styled.img`
  height: 115px;
  margin-right: 15px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 90px;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  flex: 1;
  color: ${colors.black};
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .price {
    margin-top: 5px;
    color: ${colors.metalDark};

    span {
      text-decoration: line-through;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 5px;

    h4 {
      font-size: 12px;
    }
  }
`;

export const ButtonClick = styled.div`
  text-align: center;
  margin-left: 5px;
  padding: 0;

  display: block;
  background: ${colors.green};
  border-radius: 5px;
`;
