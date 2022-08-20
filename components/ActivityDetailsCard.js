import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { HeartIcon, TemplateIcon } from "react-native-heroicons/outline";
import BpmValue from "./BpmValue";

const AcitvityCard = () => {
  const [temp, setTemp] = useState("36.5");
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleTemp = () => {
    const timer = setTimeout(() => {
      setTemp(randomNumberInRange(36.2, 38));
    }, 4000);
  };

  return (
    <View className="bg-white  rounded-lg m-2 h-full w-full p-4 ">
      <ScrollView className=" mb-40">
        <View className="p-5 bg-gray-100 items-center rounded-2xl mb-5">
          <View className="bg-white border-4 mt-2 h-40 w-40 shadow-md  border-purple-100 rounded-full  items-center justify-center">
            <View>
              <LottieView
                autoPlay
                loop
                style={{ width: 300, height: 300, borderRadius: 150 }}
                source={require("../assets/animated/pulse.json")}
              />
            </View>
          </View>
          <View className="flex-row gap-2 items-center mt-5">
            <Text className="font-bold text-3xl">
              <BpmValue />
            </Text>
            <Text className="text-xs font-medium ">bpm</Text>
          </View>
          <View className="m-4">
            <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
              <View className=" px-6 py-3 flex-row items-center justify-center gap-1 bg-red-500 rounded-2xl ">
                <HeartIcon color="white" />
                <Text className="text-xl font-normal text-white">
                  Checking...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-5 bg-gray-100 items-center rounded-2xl">
          <View className="bg-white border-4 h-40 w-40 shadow-md  border-purple-100 rounded-full  items-center justify-center mt-2">
            <Animatable.View animation="fadeInUpBig">
              <Image
                style={{ width: 300, height: 300, borderRadius: 150 }}
                source={require("../assets/temperature.gif")}
              />
            </Animatable.View>
          </View>
          <View className="flex-row gap-2 items-center mt-5">
            <Text className="font-bold text-3xl">{temp}</Text>
            <Text className="text-xs font-medium ">C</Text>
          </View>
          <View className="m-4">
            <TouchableOpacity onPress={handleTemp} activeOpacity={0.75}>
              <View className=" px-6 py-3 flex-row items-center justify-center gap-1 bg-red-500 rounded-2xl ">
                <TemplateIcon color="white" />
                <Text className="text-xl font-normal text-white">
                  Check Temperature
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AcitvityCard;
