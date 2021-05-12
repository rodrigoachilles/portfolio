/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';
import WebsiteGlobalProvider from '../../components/wrappers/WebsitePage/provider';

const AllTheProviders = ({ children, ...props }) => (
  <WebsiteGlobalProvider {...props}>
    {children}
  </WebsiteGlobalProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options = {}) => {
  const Provider = (props) => <AllTheProviders {...props} {...options.providerProps} />;

  return render(ui, { wrapper: Provider, ...options });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
//
