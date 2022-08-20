import React from "react";
import { SafeAreaView, View } from "react-native";
import ActivityDetailsCard from "../components/ActivityDetailsCard";
import Header from "../components/Header";

const ActivityScreen = () => {
  return (
    <View>
      <SafeAreaView className="pt-5 bg-white">
        {/* Custom Header */}
        <Header />
      </SafeAreaView>
      <View className="flex-1 items-center justify-center">
        <ActivityDetailsCard />
      </View>
    </View>
  );
};

export default ActivityScreen;
