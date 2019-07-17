import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

import('./layout.scss');

export const Layout= ({ subTitle, children}) => {

  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          appName
          companyName
          siteNav {
            Home
            Feedback
            About
          }
        }
      }
    }
  `);

  return <div>
    <header>
      <h1>{data.site.siteMetadata.appName}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </header>
    <nav id='menu'>
      <ul>
        <li><Link to={data.site.siteMetadata.siteNav.Home}>Home</Link></li>
        <li><Link to={data.site.siteMetadata.siteNav.About}>About</Link></li>
        <li><Link to={data.site.siteMetadata.siteNav.Feedback}>Feedback</Link></li>
      </ul>
    </nav>
    { children }
    <footer>
      <small>
        &copy; {new Date().getFullYear()} {data.site.siteMetadata.companyName}
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