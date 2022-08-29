import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id, imgUrl, title, equipment, bodyPart, target },
  } = useRoute();
  return (
    <SafeAreaView>
      <View className="flex-1 min-h-full min-w-full bg-white">
        <Image source={{ uri: imgUrl }} className="h-96 w-full bg-gray-300" />
        {/* <Text>{id}</Text> */}
        <View className="m-4 items-center justify-center mt-12">
          <Text className="font-semibold text-lg mb-1">
            Name:{" "}
            <Text className="font-normal text-gray-500 capitalize">
              {title}
            </Text>
          </Text>
          <Text className="font-semibold text-lg mb-1">
            Equipments:{" "}
            <Text className="font-normal text-gray-500 capitalize">
              {equipment}
            </Text>
          </Text>
          <Text className="font-semibold text-lg mb-1">
            Body Part:{" "}
            <Text className="font-normal text-gray-500 capitalize">
              {bodyPart}
            </Text>
          </Text>
          <Text className="font-semibold text-lg mb-1">
            Targeted Muscles:{" "}
            <Text className="font-normal text-gray-500 capitalize">
              {target}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
