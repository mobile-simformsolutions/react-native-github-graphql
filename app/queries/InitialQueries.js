import { gql } from '@apollo/client';

const GET_USER_INFO = gql`
  query viewer {
    viewer {
      login
    }
  }
`;

const GET_REPOSITORIES = gql`
  query search($query: String!, $first: Int) {
    search(query: $query, type: REPOSITORY, first: $first) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            description
            forkCount
          }
        }
      }
    }
  }
`;

export { GET_USER_INFO, GET_REPOSITORIES };
