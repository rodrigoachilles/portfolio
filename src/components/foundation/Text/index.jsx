import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitleXS.fontSize};
    font-weight: ${theme.typographyVariants.subTitleXS.fontWeight};
    line-height: ${theme.typographyVariants.subTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.subTitle.fontSize};
        font-weight: ${theme.typographyVariants.subTitle.fontWeight};
        line-height: ${theme.typographyVariants.subTitle.lineHeight};
      `}
    `,
  })}
`;

const pageTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.pageTitleXS.fontSize};
    font-weight: ${theme.typographyVariants.pageTitleXS.fontWeight};
    line-height: ${theme.typographyVariants.pageTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.pageTitle.fontSize};
        font-weight: ${theme.typographyVariants.pageTitle.fontWeight};
        line-height: ${theme.typographyVariants.pageTitle.lineHeight};
      `}
    `,
  })}
`;

const cardTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.cardTitleXS.fontSize};
    font-weight: ${theme.typographyVariants.cardTitleXS.fontWeight};
    line-height: ${theme.typographyVariants.cardTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.cardTitle.fontSize};
        font-weight: ${theme.typographyVariants.cardTitle.fontWeight};
        line-height: ${theme.typographyVariants.cardTitle.lineHeight};
      `}
    `,
  })}
`;

const logoText = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.logoTextXS.fontSize};
    font-weight: ${theme.typographyVariants.logoTextXS.fontWeight};
    line-height: ${theme.typographyVariants.logoTextXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.logoText.fontSize};
        font-weight: ${theme.typographyVariants.logoText.fontWeight};
        line-height: ${theme.typographyVariants.logoText.lineHeight};
      `}
    `,
  })}
`;

const paragraph = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraphXS.fontSize};
    font-weight: ${theme.typographyVariants.paragraphXS.fontWeight};
    line-height: ${theme.typographyVariants.paragraphXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph.fontSize};
        font-weight: ${theme.typographyVariants.paragraph.fontWeight};
        line-height: ${theme.typographyVariants.paragraph.lineHeight};
      `}
    `,
  })}
`;

export const TextStyleVariants = {
  title,
  subTitle,
  pageTitle,
  cardTitle,
  logoText,
  paragraph,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  
  ${propToStyle('textAlign')}
  ${propToStyle('textTransform')}
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'pageTitle', 'cardTitle', 'logoText', 'paragraph']),
};
