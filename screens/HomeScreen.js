import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import cycle from "../assets/cycle.gif";
import pulse from "../assets/pulse.gif";
import steps from "../assets/steps.gif";
import temperature from "../assets/temperature.gif";
import AcitvityCard from "../components/AcitvityCard";
import BpmValue from "../components/BpmValue";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import Header from "../components/Header";
import { COLORS, SIZES } from "../constants";

// HomeScreen-1
const HomeScreen = () => {
  let exercises = [
    {
      title: "Diet Recommendation",
      image: require("../assets/Exercise1.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of diet recommendation",
      duration: "5-20 MIN Course",
    },
    {
      title: "Kegel Exercises",
      image: require("../assets/Exercise2.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of kegel exercises",
      duration: "10-20 MIN Course",
    },
    {
      title: "Meditation",
      image: require("../assets/Exercise3.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of meditation and mindfulness",
      duration: "3-10 MIN Course",
    },
    {
      title: "Yoga",
      image: require("../assets/Exercise4.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of Yoga",
      duration: "5-10 MIN Course",
    },
  ];

  // removes the default top header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const ExerciseItem = ({ exercise }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Suggestions")}
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: "#9e9898",
          elevation: 5,
        }}>
        <Image
          source={exercise.image}
          style={{
            width: "100%",
            resizeMode: "cover",
            flex: 1,
          }}
        />
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
          {exercise.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-white p-2">
      <SafeAreaView className="pt-5 bg-white">
        {/* Custom Header */}
        <Header />
      </SafeAreaView>
      {/* Body */}
      <ScrollView className="flex-1 mb-10" showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 0.45 * SIZES.height,
            padding: 30,
            backgroundColor: COLORS.accent + "20",
            position: "relative",
          }}>
          <Image
            source={require("../assets/BgOrange.png")}
            style={{
              position: "absolute",
              top: 60,
              left: -50,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.accent + "45",
                marginRight: 0,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <View
                style={{
                  height: 3,
                  backgroundColor: COLORS.white,
                  width: "40%",
                  marginBottom: 8,
                  marginLeft: -5,
                }}></View>
              <View
                style={{
                  height: 3,
                  backgroundColor: COLORS.white,
                  width: "40%",
                  marginLeft: 5,
                }}></View>
            </View>
          </View>

          <Text style={{ fontSize: 30, lineHeight: 45, color: "#8860A2" }}>
            Good to see you back,
          </Text>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: COLORS.accent + "55",
              position: "absolute",
              right: -30,
              bottom: 50,
            }}></View>
        </View>

        <FlatList
          data={exercises}
          style={{
            paddingHorizontal: 20,
            marginTop: -150,
          }}
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <ExerciseItem exercise={item} />}
        />

        <View>
          {/* Featured Rows */}
          <View className="flex-1">
            <FeaturedRow
              id="1"
              title="My Activity"
              description="BPM, Steps & More"
            />
            <View className="flex-row  items-center justify-between ">
              <AcitvityCard
                text="bpm"
                count={<BpmValue />}
                imgSrc={pulse}
                onPress={() => {
                  navigation.navigate("Activity");
                }}
              />
              <AcitvityCard
                text="C"
                count="37.9"
                imgSrc={temperature}
                onPress={() => {
                  navigation.navigate("Activity");
                }}
              />
            </View>
          </View>
          <FeaturedRow
            id="2"
            title="Trending in Muscles"
            description="Target your muscles better !"
          />
          <Categories />
          <View className="flex-auto mb-40">
            <FeaturedRow
              id="3"
              title="Calories"
              description="You need a little extra today !"
            />
            <View className="flex-row  items-center justify-between">
              <AcitvityCard text="steps" count="1072" imgSrc={steps} />
              <AcitvityCard text="KCal" count="2309" imgSrc={cycle} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
