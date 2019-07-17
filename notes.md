**page query:** is attached to page and generates query for that page to pull in data for that page
```
export const query = graphql`
  allFile {
    edges {
      node {
        extension
        dir
        modifiedTime
      }
    }
  }
`;
```

**static query:**
* aliasing in graphiQL:
  ```
    query SiteMetadata {
    site {
      info: siteMetadata {
        app: appName
        company: companyName
      }
    }
  }
  ```
* fragments

