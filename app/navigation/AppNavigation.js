import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RepositoriesListScreen from '../modules/Home/RepositoriesListScreen';
import LaunchScreen from '../modules/Auth/LaunchScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Repositories" component={RepositoriesListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
