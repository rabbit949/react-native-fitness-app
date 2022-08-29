import React from "react";
import { FlatList, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import BpmValue from "../components/BpmValue";
import FeaturedRow from "../components/FeaturedRow";

const PopUpScreen = ({ navigation }) => {
  const value = <BpmValue />;

  // if (value > 100) {
  return (
    <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
      <View className="py-2">
        <Text className="text-red-400 text-center mt-1">
          Your {value} bpm is a bit high
        </Text>
      </View>
      <View className="p-3 bg-white rounded-xl">
        <FeaturedRow
          title="Precautions"
          description="Choose a healthy, low-fat, low-salt and low-sugar diet."
        />
        <Text className="text-base px-2">
          To control low bpm When the heart does not operate as it is supposed
          to and develops an abnormally slow heart rate that is less than 60
          beats per minute, the condition is known as bradycardia. Choose a
          healthy, low-fat, low-salt, low-sugar diet that's rich in fruits,
          vegetables and whole grains.
        </Text>
      </View>
      <View className="p-3 bg-white rounded-xl mt-3">
        <FeaturedRow
          title="Diet"
          description="We have some recommendations for you."
        />
        <FlatList
          data={[
            { key: "Lean meats, dairy products, eggs and poultry." },
            { key: "Fresh or frozen fish or shellfish." },
            { key: "Chicken or turkey breast without skin or marinade." },
            { key: "Lean cuts of beef." },
            { key: "Unsalted nuts and seeds." },
            { key: "Dried beans, peas, and lentils." },
          ]}
          renderItem={({ item }) => (
            <Text className="my-1 font-medium capitalize px-2">{item.key}</Text>
          )}
        />
      </View>
      <View className="p-3 bg-white rounded-xl mb-40 mt-3">
        <FeaturedRow
          title="Precautions"
          description="Excercises to reduce high bpm. "
        />
        <Text className="text-base px-2 ">
          Ten minutes of brisk or moderate walking three times a day. Thirty
          minutes a day of biking or stationary cycling, or three 10-minute
          blocks of cycling. Hiking. Desk treadmilling or pedal pushing. Weight
          training. Swimming. Aerobic classes Brisk walking Dancing. Dance
          classes like Zumba are a good workout ardening or other yardwork. This
          can include mowing the lawn and raking leaves. Aim for 30 to 45
          minutes of yardwork.
        </Text>
      </View>
    </ScrollView>
  );
  // }
  // }else if(value < 60){
  //     return(

  //       )
  // } else {
  //     return(

  //       )
  //   }
};

export default PopUpScreen;
