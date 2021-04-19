import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../utils/breakpointsMedia';
import propToStyle from '../../../utils/propToStyle';

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.titleXS.fontSize};
    font-weight: ${theme.typographys.titleXS.fontWeight};
    line-height: ${theme.typographys.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.title.fontSize};
        font-weight: ${theme.typographys.title.fontWeight};
        line-height: ${theme.typographys.title.lineHeight};
      `}
    `,
  })}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.subTitleXS.fontSize};
    font-weight: ${theme.typographys.subTitleXS.fontWeight};
    line-height: ${theme.typographys.subTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.subTitle.fontSize};
        font-weight: ${theme.typographys.subTitle.fontWeight};
        line-height: ${theme.typographys.subTitle.lineHeight};
      `}
    `,
  })}
`;

const pageTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.pageTitleXS.fontSize};
    font-weight: ${theme.typographys.pageTitleXS.fontWeight};
    line-height: ${theme.typographys.pageTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.pageTitle.fontSize};
        font-weight: ${theme.typographys.pageTitle.fontWeight};
        line-height: ${theme.typographys.pageTitle.lineHeight};
      `}
    `,
  })}
`;

const pageSubTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.pageSubTitleXS.fontSize};
    font-weight: ${theme.typographys.pageSubTitleXS.fontWeight};
    line-height: ${theme.typographys.pageSubTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.pageSubTitle.fontSize};
        font-weight: ${theme.typographys.pageSubTitle.fontWeight};
        line-height: ${theme.typographys.pageSubTitle.lineHeight};
      `}
    `,
  })}
`;

const modalTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.modalTitleXS.fontSize};
    font-weight: ${theme.typographys.modalTitleXS.fontWeight};
    line-height: ${theme.typographys.modalTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.modalTitle.fontSize};
        font-weight: ${theme.typographys.modalTitle.fontWeight};
        line-height: ${theme.typographys.modalTitle.lineHeight};
      `}
    `,
  })}
`;

const cardTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.cardTitleXS.fontSize};
    font-weight: ${theme.typographys.cardTitleXS.fontWeight};
    line-height: ${theme.typographys.cardTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.cardTitle.fontSize};
        font-weight: ${theme.typographys.cardTitle.fontWeight};
        line-height: ${theme.typographys.cardTitle.lineHeight};
      `}
    `,
  })}
`;

const logoText = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.logoTextXS.fontSize};
    font-weight: ${theme.typographys.logoTextXS.fontWeight};
    line-height: ${theme.typographys.logoTextXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.logoText.fontSize};
        font-weight: ${theme.typographys.logoText.fontWeight};
        line-height: ${theme.typographys.logoText.lineHeight};
      `}
    `,
  })}
`;

const paragraph = css`
  font-family: 'Fira Sans';
  ${({ theme }) => css`
    font-size: ${theme.typographys.paragraphXS.fontSize};
    font-weight: ${theme.typographys.paragraphXS.fontWeight};
    line-height: ${theme.typographys.paragraphXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.paragraph.fontSize};
        font-weight: ${theme.typographys.paragraph.fontWeight};
        line-height: ${theme.typographys.paragraph.lineHeight};
      `}
    `,
  })}
`;

const navBar = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.navBarXS.fontSize};
    font-weight: ${theme.typographys.navBarXS.fontWeight};
    line-height: ${theme.typographys.navBarXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.navBar.fontSize};
        font-weight: ${theme.typographys.navBar.fontWeight};
        line-height: ${theme.typographys.navBar.lineHeight};
      `}
    `,
  })}
`;

const button = css`
  font-family: 'Fira Sans';
  ${({ theme }) => css`
    font-size: ${theme.typographys.buttonXS.fontSize};
    font-weight: ${theme.typographys.buttonXS.fontWeight};
    line-height: ${theme.typographys.buttonXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.button.fontSize};
        font-weight: ${theme.typographys.button.fontWeight};
        line-height: ${theme.typographys.button.lineHeight};
      `}
    `,
  })}
`;

const repositoryTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.repositoryTitleXS.fontSize};
    font-weight: ${theme.typographys.repositoryTitleXS.fontWeight};
    line-height: ${theme.typographys.repositoryTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.repositoryTitle.fontSize};
        font-weight: ${theme.typographys.repositoryTitle.fontWeight};
        line-height: ${theme.typographys.repositoryTitle.lineHeight};
      `}
    `,
  })}
`;

const repositorySubTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.repositorySubTitleXS.fontSize};
    font-weight: ${theme.typographys.repositorySubTitleXS.fontWeight};
    line-height: ${theme.typographys.repositorySubTitleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.repositorySubTitle.fontSize};
        font-weight: ${theme.typographys.repositorySubTitle.fontWeight};
        line-height: ${theme.typographys.repositorySubTitle.lineHeight};
      `}
    `,
  })}
`;

const repositoryParagraph = css`
  ${({ theme }) => css`
    font-size: ${theme.typographys.repositoryParagraphXS.fontSize};
    font-weight: ${theme.typographys.repositoryParagraphXS.fontWeight};
    line-height: ${theme.typographys.repositoryParagraphXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographys.repositoryParagraph.fontSize};
        font-weight: ${theme.typographys.repositoryParagraph.fontWeight};
        line-height: ${theme.typographys.repositoryParagraph.lineHeight};
      `}
    `,
  })}
`;

export const TextStyleVariants = {
  title,
  subTitle,
  pageTitle,
  pageSubTitle,
  modalTitle,
  cardTitle,
  logoText,
  paragraph,
  navBar,
  button,
  repositoryTitle,
  repositorySubTitle,
  repositoryParagraph,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}`)};
  
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('cursor')}
  ${propToStyle('textAlign')}
  ${propToStyle('textTransform')}

  ${(props) => props.link && css`
    &:hover,
    &:focus {
      opacity: .5;
    }
  `}
`;

export default TextBase;
