import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  AdjustmentsIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import ActivityScreen from "../screens/ActivityScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ToolsScreen from "../screens/ToolsScreen";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  // removes the default top header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: focused ? "#8860A2" : "",
              }}>
              <HomeIcon
                size={30}
                color="#000"
                style={{
                  color: focused ? "#8860A2" : "#000",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: focused ? "#8860A2" : "",
              }}>
              <SearchIcon
                size={30}
                color="#000"
                style={{
                  color: focused ? "#8860A2" : "#000",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: focused ? "#8860A2" : "",
              }}>
              <HeartIcon
                size={30}
                color="#000"
                style={{
                  color: focused ? "#8860A2" : "#000",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: focused ? "#8860A2" : "",
              }}>
              <AdjustmentsIcon
                size={30}
                color="#000"
                style={{
                  color: focused ? "#8860A2" : "#000",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: focused ? "#8860A2" : "",
              }}>
              <UserIcon
                size={30}
                color="#000"
                style={{
                  color: focused ? "#8860A2" : "#000",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
