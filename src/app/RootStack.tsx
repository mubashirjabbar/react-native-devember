// ./src/app/RootStack.tsx
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DayListItem from '../components/DayListItem';

const RootStack = createStackNavigator();

const RootStackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'DayListItem'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <RootStack.Screen name="DayListItem" component={DayListItem} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
