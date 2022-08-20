import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <View className="mr-2 relative h-40 w-40 rounded-2xl border-2 border-purple-100 shadow-md  bg-white items-center justify-center">
      <Image
        source={imgUrl}
        className="h-36 w-36 object-contain object-center"
      />
      <Text className="absolute bottom-0 right-0 rounded-md text-white font-bold bg-black p-2">
        {title}
      </Text>
    </View>
  );
};

export default CategoryCard;

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
