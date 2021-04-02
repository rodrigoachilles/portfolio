import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import Logo from '../Logo';
import itemsMenu from './content';
import HeaderWrapper from './styles';

export default function Header({ onContactClick }) {
  return (
    <Box
      height={{ xs: '44px', md: '54px' }}
    >
      <HeaderWrapper>
        <HeaderWrapper.LeftSide>
          <Logo />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide as="ul">
          {itemsMenu.map((item) => (
            <li key={item.id}>
              {item.url && (
              <Text
                href={item.url}
                title={item.name}
                variant="navBar"
                padding={{ md: '16px' }}
              >
                {item.name}
              </Text>
              )}
              {!item.url
            && (
              <Text
                tag="a"
                onClick={onContactClick}
                title={item.name}
                variant="navBar"
                cursor="pointer"
                padding={{ xs: '8px', md: '16px' }}
                link
              >
                {item.name}
              </Text>
            )}
            </li>
          ))}
        </HeaderWrapper.RightSide>
      </HeaderWrapper>
    </Box>
  );
}

Header.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
