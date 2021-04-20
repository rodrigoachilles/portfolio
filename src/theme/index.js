const colors = {
  background: {
    main: {
      color: '#E9E9E9',
    },
    light: {
      color: '#FFFFFF',
    },
  },
  borders: {
    main: {
      color: '#99C1CC',
    },
  },
  primary: {
    main: {
      color: '#99C1CC',
      contrastText: '#000000',
    },
    light: {
      color: '#E3F1F4',
      contrastText: '#000000',
    },
  },
  secondary: {
    main: {
      color: '#D9F2FC',
      contrastText: '#262626',
    },
    light: {
      color: '#E3F1F4',
      contrastText: '#262626',
    },
  },
  tertiary: {
    main: {
      color: '#BADCE4',
      contrastText: '#434343',
    },
    light: {
      color: '#E3F1F4',
      contrastText: '#434343',
    },
  },
  modes: {
    dark: {},
  },
};

const typographys = {
  // [title]
  titleXS: {
    fontSize: '64px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  title: {
    fontSize: '90px',
    fontWeight: 'normal',
    lineHeight: 1.25, // 125%
  },

  // [subTitle]
  subTitleXS: {
    fontSize: '48px',
    fontWeight: '300',
    lineHeight: 1, // 100%
  },
  subTitle: {
    fontSize: '48px',
    fontWeight: '300',
    lineHeight: 1.25, // 125%
  },

  // [pageTitle]
  pageTitleXS: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  pageTitle: {
    fontSize: '30px',
    fontWeight: 'normal',
    lineHeight: 1.25, // 125%
  },

  // [pageSubTitle]
  pageSubTitleXS: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  pageSubTitle: {
    fontSize: '25px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [modalTitle]
  modalTitleXS: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  modalTitle: {
    fontSize: '25px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [cardTitle]
  cardTitleXS: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: 1.25, // 125%
  },

  // [logoText]
  logoTextXS: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  logoText: {
    fontSize: '28px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [paragraph]
  paragraphXS: {
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [navBar]
  navBarXS: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  navBar: {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [navBar]
  buttonXS: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  button: {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: 1.25, // 125%
  },

  // [repositoryTitle]
  repositoryTitleXS: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  repositoryTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 1.25, // 125%
  },

  // [repositorySubTitle]
  repositorySubTitleXS: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  repositorySubTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1.25, // 125%
  },

  // [repositoryParagraph]
  repositoryParagraphXS: {
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  repositoryParagraph: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },

  // [descriptionSubTitle]
  descriptionSubTitleXS: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  descriptionSubTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1.25, // 125%
  },
};

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographys,
  breakpoints,
  transition: '200ms ease-in-out',
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
};
