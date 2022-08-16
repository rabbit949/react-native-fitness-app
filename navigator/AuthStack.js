import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Onboarding' component={OnBoardingScreen} />
      <Stack.Screen component={LoginScreen} name='Login'/>
      <Stack.Screen component={RegisterScreen} name='Register'/>
    </Stack.Navigator>
  )
}

export default AuthStack