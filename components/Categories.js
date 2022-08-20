import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const navigation = useNavigation();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const categoriesData = async() => {
  //     const exerciseCategory = await useFetch('https://wger.de/api/v2/exercisecategory/?format=json')
  //     setData(exerciseCategory.results)
  //     console.log(data)

  //   }
  //   categoriesData()

  // }, [])

  // if (!data.length) return <Text>Loading...</Text>
  const categories = [
    {
      id: 1,
      name: "Abs",
      image: require("../assets/images/abs.png"),
    },
    {
      id: 2,
      name: "Arms",
      image: require("../assets/images/arms2.png"),
    },
    {
      id: 3,
      name: "Back",
      image: require("../assets/images/back.png"),
    },
    {
      id: 4,
      name: "Calves",
      image: require("../assets/images/calves.png"),
    },
    {
      id: 5,
      name: "Chest",
      image: require("../assets/images/chest.png"),
    },
    {
      id: 6,
      name: "Legs",
      image: require("../assets/images/legs.png"),
    },
    {
      id: 7,
      name: "Shoulders",
      image: require("../assets/images/shoulders.png"),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => {
            navigation.navigate("Search");
          }}>
          <CategoryCard imgUrl={category.image} title={category.name} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
