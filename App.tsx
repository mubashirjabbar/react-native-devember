// App.tsx
import { View } from 'react-native';
import React from 'react';
import RootStackNavigator from './src/app/RootStack';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RootStackNavigator />
    </View>
  );
}
