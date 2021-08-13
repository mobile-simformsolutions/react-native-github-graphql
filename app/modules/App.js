/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from '../config/ApolloConfig';
import RootContainer from '../navigation/AppNavigation';

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={ApolloClient?.client}>
      <RootContainer />
    </ApolloProvider>
  );
};

export default App;
