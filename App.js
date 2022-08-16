import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { TailwindProvider } from "tailwindcss-react-native";
import AppStack from './navigator/AppStack';




export default function App() {
  return (
    
    <NavigationContainer>
      <TailwindProvider>
        {/* here we will check if user exsit or not! and depending on user state we will render the related stack */}
        <AppStack/>
        <StatusBar style='dark' />
        {/* <AuthStack/> */}
      </TailwindProvider>
    </NavigationContainer>
  );
}

