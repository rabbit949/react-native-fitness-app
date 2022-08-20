import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      {/* <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen component={SearchScreen} name='Search'/>
      <Drawer.Screen component={ActivityScreen} name='My Activity'/>
      <Drawer.Screen component={ToolsScreen} name='Tools'/>
      <Drawer.Screen component={SettingsScreen} name='Settings'/> */}
      <Drawer.Screen component={TabNavigator} name="Stack" />
    </Drawer.Navigator>
  );
};

export default AppStack;
