import { API_KEY } from "./keys.js";

console.log("Hi there!");

const apiKey = API_KEY;

console.log(apiKey);

const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apiKey,
      i: "tt0848228",
    },
  });
  console.log(response.data);
};

fetchData();
