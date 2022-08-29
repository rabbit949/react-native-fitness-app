import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  FireIcon,
  InformationCircleIcon,
} from "react-native-heroicons/outline";

const ExerciseCard = ({ id, imgUrl, title, equipment, bodyPart, target }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SearchStack", {
          screen: "Details",
          params: {
            id,
            imgUrl,
            title,
            equipment,
            bodyPart,
            target,
          },
        });
      }}
      className="bg-white rounded-lg mb-3 shadow-sm">
      <Image
        source={{ uri: imgUrl }}
        className="p-1 h-96 w-96 rounded-lg object-contain "
      />
      <View className="px-4 pb-4 pt-2 border-t border-gray-500 ">
        <Text className="font-bold text-xl pt-1 capitalize">{title}</Text>
        <View className="flex-row space-x-1 items-center pt-1">
          <InformationCircleIcon size={18} color="#8860A2" />
          <Text className="text-xs text-gray-500">
            <Text className=" text-[#8860A2]">{target}</Text> - {bodyPart}
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center mt-1">
          <FireIcon size={18} color={"#8860A2"} />
          <Text className="text-xs text-gray-500">Equipment - {equipment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
