import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

const AcitvityCard = ({ imgSrc, count, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-1 flex-row items-center justify-center gap-8">
        <View className="bg-gray-100 px-3 py-6 rounded-lg ">
          <View className="flex-1  h-40 w-40 relative bg-white border-4 shadow-md  border-purple-100 rounded-full  items-center justify-center">
            <Animatable.View animation="fadeInUpBig">
              <Image
                style={{ width: 100, height: 100, borderRadius: 75 }}
                source={imgSrc}
              />
            </Animatable.View>
            <View className="flex-row gap-1 absolute bottom-2 left-12">
              <Text className="font-bold text-lg">{count}</Text>
              <Text className="text-xs font-medium ">{text}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AcitvityCard;
