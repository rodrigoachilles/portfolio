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

export async function getStaticProps() {
  const projects = [
    {
      id: 1,
      header: 'Project Report',
      image: {
        url: '/images/project1.svg',
        alt: 'Project1',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      highlighted: true,
    },
    {
      id: 2,
      header: 'Project Report',
      image: {
        url: '/images/project2.svg',
        alt: 'Project2',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    },
    {
      id: 3,
      header: 'Project Report',
      image: {
        url: '/images/project1.svg',
        alt: 'Project1',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    },
    {
      id: 4,
      header: 'Project Report',
      image: {
        url: '/images/project2.svg',
        alt: 'Project2',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    },
  ];

  // const projects = await fetch(`${server}/api/projects/`)
  //   .then((response) => response.json())
  //   .then((responseJson) => responseJson.projects);

  return {
    props: {
      projects,
    },
  };
}
