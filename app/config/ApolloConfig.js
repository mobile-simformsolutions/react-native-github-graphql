import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { CachePersistor } from 'apollo-cache-persist';
import { setContext } from '@apollo/client/link/context';

const httpLink = new createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: 'Bearer <Github Access Token>'
    }
  };
});

// create an inmemory cache instance for caching graphql data
const cache = new InMemoryCache();

// Cache persistor
const persistor = new CachePersistor({
  cache,
  storage: AsyncStorage
});

const client = new ApolloClient({
  // use below link when you need to add authorization token in header
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default {
  client,
  persistor
};
