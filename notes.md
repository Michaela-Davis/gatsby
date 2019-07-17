**page query:** is attached to page and generates query for that page
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

