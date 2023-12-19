// App.tsx
import { SafeAreaView, StatusBar ,View} from 'react-native';
import React from 'react';
import RootStackNavigator from './src/app/RootStack';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <RootStackNavigator />
    </View>
  );
}
