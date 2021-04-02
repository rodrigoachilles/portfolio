import HomeScreen from '../components/screens/HomeScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    coverProps: {
      display: true,
    },
  },
});
