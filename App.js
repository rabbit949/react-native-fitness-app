import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { auth } from "./Firebase";
import AuthStack from "./navigator/AuthStack";
import TabNavigator from "./navigator/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar style="dark" />
        {auth.authUser ? <TabNavigator /> : <AuthStack />}
      </TailwindProvider>
    </NavigationContainer>
  );
}
