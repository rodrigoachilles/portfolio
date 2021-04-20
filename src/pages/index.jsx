import HomeScreen from '../components/screens/HomeScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

const projects = [
  {
    id: '1',
    header: 'Project Report',
    image: {
      url: '/images/project1.svg',
      alt: 'Project1',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    website: 'https://www.google.com',
    highlighted: true,
  },
  {
    id: '2',
    header: 'Project Report',
    image: {
      url: '/images/project2.svg',
      alt: 'Project2',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    website: 'https://www.google.com',
  },
  {
    id: '3',
    header: 'Project Report',
    image: {
      url: '/images/project1.svg',
      alt: 'Project1',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    website: 'https://www.google.com',
  },
  {
    id: '4',
    header: 'Project Report',
    image: {
      url: '/images/project2.svg',
      alt: 'Project2',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    website: 'https://www.google.com',
  },
];

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
  // const projects = await fetch(`${urlApi}/api/projects`)
  //   .then((response) => response.json());

  return {
    props: {
      projects,
    },
  };
}
