import React from "react"
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';

export default ({ data }) => (
  <Layout subTitle='Home'>
    <div>Pages Folder File List</div>
    <ul>
      {data.allFile.files.map(({ file }) => {      
        return <li key={file.id}>
          {file.name} ({file.sizeInBytes} bytes)
        </li>;
      })}
    </ul>
  </Layout>
);

export const query = graphql`
{
  allFile {
    files: edges {
      file: node {
        id
        name: base
        sizeInBytes: size
      }
    }
  }
}
`;
