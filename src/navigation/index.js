import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import StackMemo from '../screens/StackMemo';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          name="StackMemo"
          component={StackMemo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
