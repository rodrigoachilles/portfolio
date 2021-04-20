import AboutScreen from '../components/screens/AboutScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';
import { urlApiGithub } from '../config';

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
  },
});

export async function getStaticProps() {
  const week = 60 * 60 * 24 * 7;

  const repositoriesGit = await fetch(`${urlApiGithub}/users/rodrigoachilles/repos`)
    .then((response) => response.json());

  const repositories = repositoriesGit
    .filter((repository) => !repository.fork)
    .sort((repository, otherRepository) => {
      if (new Date(repository.updated_at) < new Date(otherRepository.updated_at)) return 1;
      if (new Date(repository.updated_at) > new Date(otherRepository.updated_at)) return -1;
      return 0;
    })
    .map((repository) => ({
      id: repository.id,
      name: repository.name,
      url: repository.html_url,
      published: repository.homepage,
    }));

  return {
    props: {
      repositories,
    },
    revalidate: week,
  };
}
