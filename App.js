import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/Navigation';
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { LogBox } from 'react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});

LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />      
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);