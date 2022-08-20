import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { auth } from "../Firebase";
const Header = () => {
  const navigation = useNavigation();
  // setting Date in header
  const current = new Date();
  const months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  );
  const date = `${current.getDate()} ${
    months[current.getMonth()]
  }, ${current.getFullYear()}`;

  return (
    <View className="flex-row pb-3 items-center mx-4 mt-3 space-x-2 ">
      <Image
        source={{ uri: auth?.currentUser?.photoURL }}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        {/* fetch username from firebase */}
        <Text className="font-bold text-xl">
          Hi,{" "}
          <Text style={{ color: "#8860A2" }}>
            {auth?.currentUser?.displayName}
          </Text>
        </Text>
        <Text className="text-bold text-gray-400 text-xs">{date}</Text>
      </View>
    </View>
  );
};

export default Header;
