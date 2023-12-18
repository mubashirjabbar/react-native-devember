import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import DayListItem from '../components/DayListItem';




const RootStack = createStackNavigator();
const Stack = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName={'DayListItem'}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}>
                <RootStack.Screen name="update-password" component={DayListItem} />


            </RootStack.Navigator>
        </NavigationContainer>
    );
};



export default Stack;
