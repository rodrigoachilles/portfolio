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

  // [cardTitle]
  cardTitleXS: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1, // 100%
  },
  cardTitle: {
    fontSize: '24px',
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
    lineHeight: 1.25, // 125%
  },

  // [paragraph]
  paragraphXS: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 1, // 100%
  },
  paragraph: {
    fontSize: '18px',
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
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
};
