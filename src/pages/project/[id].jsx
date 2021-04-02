import ProjectScreen from '../../components/screens/ProjectScreen';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

export default websitePageHOC(ProjectScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Project',
    },
  },
});
