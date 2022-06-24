import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />      
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
};
