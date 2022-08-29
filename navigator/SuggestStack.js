import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PopUpScreen from "../screens/PopUpScreen";
import SuggestionScreen from "../screens/SuggestionScreen";

const Stack = createNativeStackNavigator();

const SuggestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SuggestionScreen}
        name="Suggestions"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={PopUpScreen} name="Suggested" />
    </Stack.Navigator>
  );
};

export default SuggestStack;
