import { API_KEY } from "./keys.js";

console.log("Hi there!");

const apiKey = API_KEY;

console.log(apiKey);

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apiKey,
      s: searchTerm,
    },
  });
  console.log(response.data);
};

fetchData();

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
