// ./src/app/RootStack.tsx
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DayListItem from '../components/DayListItem';
import HomeScreen from '../days/index';
import DayOne from '../days/day1/index';

const RootStack = createStackNavigator();

const RootStackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="DayOne" component={DayOne} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
