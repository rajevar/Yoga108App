import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './app/components/AppStack';

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;