import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useFetch } from "../hooks/useFetch";

const BpmValue = () => {
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
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [result]);

  return <Text>{Math.ceil(result)}</Text>;
};

export default BpmValue;
