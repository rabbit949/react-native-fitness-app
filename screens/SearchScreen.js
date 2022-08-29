import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SearchIcon } from "react-native-heroicons/outline";
import ExerciseCard from "../components/ExerciseCard";

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f18e56fc2msh1fd8ad00d93ce63p1de061jsn7d6b747a6cf2",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  };

  const handleSearch = async () => {
    setLoading(true);
    if (search) {
      const res = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises",
        options,
      );
      const data = await res.json();
      const searchedExercises = data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );
      setLoading(false);

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <SafeAreaView className="mx-4">
      {loading ? (
        <View className="min-h-full w-full items-center">
          <ActivityIndicator size="large" color="#8860A2" className=" mt-64" />
        </View>
      ) : (
        <View>
          <View className="mx-4 mb-2">
            <View className="flex-1 flex-row justify-center items-center bg-white rounded-3xl mt-3 shadow">
              <SearchIcon size={20} color="#8860A2" />
              <TextInput
                style={style.input}
                placeholder="Search exercises by body part"
                keyboardType="defalut"
                value={search}
                onChangeText={(text) => setSearch(text.toLowerCase())}
                blurOnSubmit={true}
                onSubmitEditing={handleSearch}
              />
            </View>
          </View>
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.name}
                bodyPart={exercise.bodyPart}
                equipment={exercise.equipment}
                target={exercise.target}
                imgUrl={exercise.gifUrl}
              />
            ))}
            <View className="mb-40"></View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    placeHolderTextColor: "#8860A2",
  },
});
