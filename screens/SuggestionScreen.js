import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import FeaturedRow from "../components/FeaturedRow";
import { SIZES } from "../constants";
import { useFetch } from "../hooks/useFetch";

const SuggestionScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const url =
    "https://community-ubidots.p.rapidapi.com/variables/62c93c6795afa02bd7feebf5/values";

  const bpmOptions = {
    method: "GET",
    headers: {
      "X-Auth-Token": "BBFF-tzVY3ImHANrEmkDjY0gwrZOALPS1s1",
      "X-RapidAPI-Key": "9f18e56fc2msh1fd8ad00d93ce63p1de061jsn7d6b747a6cf2",
      "X-RapidAPI-Host": "community-ubidots.p.rapidapi.com",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const getData = async () => {
    try {
      const res = await useFetch(url, bpmOptions);
      setData(res.results[res.results.length - 1].value / 20);
      setResult(Math.random() * (data - (data - 1)) + (data - 1));
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [result]);

  if (result + 1 > 100) {
    return (
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 0.4 * SIZES.height,
              padding: 30,
              backgroundColor: "#C7B8F5",
              position: "relative",
            }}>
            <Image
              source={require("../assets/BgPurple.png")}
              style={{
                position: "absolute",
                top: 0,
                left: -50,
              }}
            />
          </View>
          <View style={{ marginTop: -180, marginHorizontal: 30 }}>
            <View className="py-2">
              <Text className="text-white font-semibold text-center mt-1">
                Your bpm is a bit high
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl shadow-sm">
              <FeaturedRow
                title="Precautions"
                description="Choose a healthy, low-fat, low-salt and low-sugar diet."
              />
              <Text className="text-base px-2">
                Diet rich in fruits, vegetables, whole grains, legumes, nuts,
                and seeds. This strategy has been shown to improve your heart
                health and promote longevity, boost energy, enhance overall
                health – and lower your bpm.
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl mt-3 shadow-sm">
              <FeaturedRow
                title="Diet"
                description="We have some recommendations for you."
              />
              <FlatList
                data={[
                  { key: "chia seeds" },
                  { key: "spinach and kale" },
                  { key: "Seeds" },
                  { key: "Walnut" },
                  { key: "Rice" },
                  { key: "Oats" },
                  { key: "Olive Oil" },
                ]}
                renderItem={({ item }) => (
                  <Text className="my-1 font-medium capitalize px-2">
                    {item.key}
                  </Text>
                )}
              />
            </View>
            <View className="p-3 bg-white rounded-xl mb-40 mt-3 shadow-sm">
              <FeaturedRow
                title="Exercises"
                description="Excercises to reduce high bpm. "
              />
              <Text className="text-base px-2 ">
                Ten minutes of brisk or moderate walking three times a day.
                Thirty minutes a day of biking or stationary cycling, or three
                10-minute blocks of cycling. Hiking. Desk treadmilling or pedal
                pushing. Weight training. Swimming. Aerobic classes Brisk
                walking Dancing. Dance classes like Zumba are a good workout
                ardening or other yardwork. This can include mowing the lawn and
                raking leaves. Aim for 30 to 45 minutes of yardwork.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if (result < 60) {
    return (
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 0.4 * SIZES.height,
              padding: 30,
              backgroundColor: "#C7B8F5",
              position: "relative",
            }}>
            <Image
              source={require("../assets/BgPurple.png")}
              style={{
                position: "absolute",
                top: 0,
                left: -50,
              }}
            />
          </View>
          <View style={{ marginTop: -180, marginHorizontal: 30 }}>
            <View className="py-2">
              <Text className="text-white font-semibold text-center mt-1">
                Your bpm is low.
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl shadow-sm">
              <FeaturedRow
                title="Precautions"
                description="Choose a healthy, low-fat, low-salt and low-sugar diet."
              />
              <Text className="text-base px-2">
                To control low bpm When the heart does not operate as it is
                supposed to and develops an abnormally slow heart rate that is
                less than 60 beats per minute, the condition is known as
                bradycardia. Choose a healthy, low-fat, low-salt, low-sugar diet
                that's rich in fruits, vegetables and whole grains.
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl mt-3 shadow-sm">
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
                  <Text className="my-1 font-medium capitalize px-2">
                    {item.key}
                  </Text>
                )}
              />
            </View>
            <View className="p-3 bg-white rounded-xl mb-40 mt-3 shadow-sm">
              <FeaturedRow
                title="Exercises"
                description="Excercises to maintain bpm. "
              />
              <Text className="text-base px-2 ">
                Ten minutes of brisk or moderate walking three times a day.
                Thirty minutes a day of biking or stationary cycling, or three
                10-minute blocks of cycling. Hiking. Desk treadmilling or pedal
                pushing. Weight training. Swimming. Aerobic classes Brisk
                walking Dancing. Dance classes like Zumba are a good workout
                ardening or other yardwork. This can include mowing the lawn and
                raking leaves. Aim for 30 to 45 minutes of yardwork.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 0.4 * SIZES.height,
              padding: 30,
              backgroundColor: "#C7B8F5",
              position: "relative",
            }}>
            <Image
              source={require("../assets/BgPurple.png")}
              style={{
                position: "absolute",
                top: 0,
                left: -50,
              }}
            />
          </View>
          <View style={{ marginTop: -180, marginHorizontal: 30 }}>
            <View className="py-2">
              <Text className="text-white font-semibold text-center mt-1">
                Your {value} bpm is Normal.
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl shadow-sm">
              <FeaturedRow
                title="Yoga"
                description="Excercises for normal healthy heart"
              />
              <Text className="text-base px-2">
                Yoga is known to lower blood pressure, improve your flexibility
                and balance and help reduce any aches and pains. Yoga can be
                done in the comfort of your own home -- all you need is a yoga
                mat and a small space to move.
              </Text>
            </View>
            <View className="p-3 bg-white rounded-xl mt-3 shadow-sm">
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
                  <Text className="my-1 font-medium capitalize px-2">
                    {item.key}
                  </Text>
                )}
              />
            </View>
            <View className="p-3 bg-white rounded-xl mb-40 mt-3 shadow-sm">
              <FeaturedRow
                title="Weightlifting"
                description="Workout Routines "
              />
              <Text className="text-base px-2 ">
                Weightlifting may be slower paced, but it is also a good way to
                get your heart rate up and improve your heart's strength. One
                study found that lifting weights can reduce your chances of
                having a stroke or heart attack by about 40% to 70%.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default SuggestionScreen;
