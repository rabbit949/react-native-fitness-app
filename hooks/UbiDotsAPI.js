const exerciseURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9f18e56fc2msh1fd8ad00d93ce63p1de061jsn7d6b747a6cf2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
