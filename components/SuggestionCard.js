import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const SuggestionCard = ({ title, desc, imgSrc, id, handleSuggest }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={handleSuggest}
      activeOpacity={0.75}
      style={{ marginBottom: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
          borderRadius: 15,
          padding: 15,
          shadowColor: "#9e9898",
          elevation: 5,
        }}>
        <Image
          source={imgSrc}
          style={{ width: 80, height: 60, resizeMode: "center" }}
        />
        <View classname="mx-1">
          <Text className="font-semibold">{title}</Text>
          <Text className="text-gray-600">{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestionCard;
