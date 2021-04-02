import AboutScreen from '../components/screens/AboutScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
