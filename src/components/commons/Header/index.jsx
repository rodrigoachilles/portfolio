import React from 'react';
import Text from '../../foundation/Text';
import Logo from '../Logo';
import itemsMenu from './content';
import HeaderWrapper from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide as="ul">
        {itemsMenu.map((item) => (
          <li key={item.id}>
            <Text
              tag="a"
              href={item.url}
              title={item.name}
              variant="navBar"
              padding={{ xs: '8px', md: '16px' }}
            >
              {item.name}
            </Text>
          </li>
        ))}
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
