import ProjectScreen from '../../components/screens/ProjectScreen';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

export default websitePageHOC(ProjectScreen);

const ps = [
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

export async function getStaticProps({ params }) {
  const { id } = params;

  // const project = await fetch(`${urlApi}/api/projects/${id}`)
  //   .then((response) => response.json());
  const project = ps.filter((p) => p.id === id)[0];

  return {
    props: {
      project,
      pageWrapperProps: {
        seoProps: {
          headTitle: project.header,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  // const projects = await fetch(`${urlApi}/api/projects`)
  //   .then((response) => response.json());

  // const paths = projects.map((project) => ({ params: { id: project.id } }));

  const paths = ps.map((project) => ({ params: { id: project.id } }));

  return {
    paths,
    fallback: false,
  };
}
