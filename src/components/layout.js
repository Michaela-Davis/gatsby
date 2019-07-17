import React from 'react';
import PropTypes from 'prop-types';

import('./layout.scss');

export const Layout= ({ subTitle, children}) => {

  return <div>
    <header>
      <h1>Notes Viewer</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </header>
    { children }
    <footer>
      <small>
        &copy; {new Date().getFullYear()} A Cool Company, Inc.
      </small>
    </footer>
  </div>


};

Layout.defaultProps = {
  subTitle: '',
};

Layout.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.node,
};