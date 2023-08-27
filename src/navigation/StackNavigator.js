import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';
import Loaders from '../screens/Loaders';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animation: 'slide_from_right',
      }}
      initialRouteName="Home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
      <Stack.Screen
        name="Loaders"
        component={Loaders}
        options={{
          animation: 'none',
          headerShown: true,
          headerStyle: {backgroundColor: '#6842FB'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
