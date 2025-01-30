import React from 'react';
// navigation container import
import {NavigationContainer} from '@react-navigation/native';
// native stack import yolu
import Router from './src/navigation/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
