import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import SectionTitle from '../SectionTitle';
import RepositoriesWrapper from './styles';

export default function Repositories({ repositories }) {
  return (
    <RepositoriesWrapper>
      <SectionTitle title="Meus repositórios" />

      {repositories.map((repository) => (
        <Box
          display="flex"
          flex="1"
          justifyContent="flex-start"
          flexDirection="column"
          flexWrap="nowrap"
          padding="5px"
          key={repository.id}
        >
          <Text
            tag="h1"
            variant="repositoryTitle"
            color="secondary.main.contrastText"
          >
            {repository.name}

          </Text>
          <Text
            tag="p"
            variant="repositoryParagraph"
            color="secondary.main.contrastText"
            href={repository.url}
            target="_blank"
          >
            {repository.url}

          </Text>

          {repository.published && (
          <Box
            display="flex"
            flex="1"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
            flexWrap="wrap"
          >

            <Text
              tag="h2"
              variant="repositorySubTitle"
              color="tertiary.main.contrastText"
            >
              Publicado:

            </Text>
            <Text
              tag="p"
              variant="repositoryParagraph"
              color="tertiary.main.contrastText"
              href={repository.published}
              paddingLeft="5px"
              target="_blank"
            >
              {repository.published}

            </Text>
          </Box>
          )}
        </Box>
      ))}
    </RepositoriesWrapper>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    published: PropTypes.string,
  })).isRequired,
};
