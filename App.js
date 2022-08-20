import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import AuthStack from "./navigator/AuthStack";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* <AuthProvider> */}
        <StatusBar style="dark" />
        {/* here we're checking if user exsit or not! and depending on user state we will render the related stack / group of screens */}
        <AuthStack />
        {/* <AppStack /> */}
        {/* </AuthProvider> */}
      </TailwindProvider>
    </NavigationContainer>

    // <AuthContext.Provider value={authContext}>
    // </AuthContext.Provider>
  );

  // const { user } = useAuth();

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  // const AuthContext = useMemo(() => {
  //   signIn: () => {
  //     setUserToken("gibs");
  //     setIsLoading(false);
  //   };
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //   };
  //   signUp: () => {
  //     setUserToken("gibs");
  //     setIsLoading(false);
  //   };
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }
}
