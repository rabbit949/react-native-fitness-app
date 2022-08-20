import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const SearchScreen = () => {
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
    if (search) {
      const res = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises",
        options,
      );
      const data = await res.json();
      console.log(data);

      const searchedExercises = data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <View classname="mt-2 flex-1">
          <TextInput
            style={style.input}
            placeholder="Search exercises by body part"
            keyboardType="defalut"
            autoFocus={true}
            value={search}
            onChangeText={(text) => setSearch(text.toLowerCase())}
            blurOnSubmit={true}
            onSubmitEditing={handleSearch}
          />
        </View>
      </SafeAreaView>
      <FlatList></FlatList>
    </View>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginVertical: 40,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: "#8860A2",
    placeHolderTextColor: "#8860A2",
  },
});
