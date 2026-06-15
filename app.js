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

const input = document.querySelector("input");

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 2000));
