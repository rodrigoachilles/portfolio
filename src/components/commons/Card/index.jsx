import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { Text } from '../../foundation/Text';

const CardWrapper = styled.div`
  border: .125rem solid ${({ theme }) => theme.colors.primary.main.color};
  background: ${({ theme }) => theme.colors.background.main.color};
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  transition: .2s box-shadow ease-in-out;
  border-radius: 8px;
  ${({ highlighted }) => highlighted && css`
    &::before {
      content: "Destaque";
      position: absolute;
      height: 20px;
      text-align: center;
      
      ${({ theme }) => css`
        background: ${theme.colors.background.main.color};
        border: 1px solid ${theme.colors.borders.main.color};
        font-family: ${theme.fontFamily}
      `};
      padding: 10px 64px;
      margin: 10px;
    }
    ${breakpointsMedia({
    lg: css`
        display: flex;
      `,
  })}
  `}
  &:hover {
    box-shadow: 0 14px 25px rgba(0,0,0,.16);
  }
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  img {
    width: 100%;
    height: 390px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  ${({ highlighted }) => highlighted && css`
    ${breakpointsMedia({
    lg: css`
        width: 70%;
        img {
          height: 100%;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      `,
  })}
  `}
`;

const TextWrapper = styled.div`
  h1 {
    text-align: center;
  }
  p {
    display: none;
  }
  ${({ highlighted }) => highlighted && css`
    ${breakpointsMedia({
    lg: css`
        width: 30%;
        /* topo | direita | inferior | esquerda */
        margin: 1em 1em 0 1em;
        h1 {
          text-align: left;
        }
        p {
          display: block;
        }
      `,
  })}
  `}
`;

export default function Card({
  header, description, image, highlighted,
}) {
  return (
    <CardWrapper highlighted={highlighted}>
      <CardHeader highlighted={highlighted}>
        <img src={image.url} alt={image.alt} />
      </CardHeader>

      <TextWrapper highlighted={highlighted}>
        <Text tag="h1" variant="cardTitle" color="background.main.contrastText">{header}</Text>
        <Text tag="p" variant="paragraph" color="background.main.contrastText">{description}</Text>
      </TextWrapper>
    </CardWrapper>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  highlighted: PropTypes.bool.isRequired,
};
