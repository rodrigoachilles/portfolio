import NotFoundScreen from '../components/screens/NotFoundScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

export default websitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Not Found',
    },
  },
});
