import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import AuthStack from "./navigator/AuthStack";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar style="dark" />
        {/* here we will check if user exsit or not! and depending on user state we will render the related stack */}
        <AuthStack />
      </TailwindProvider>
    </NavigationContainer>
  );
}
