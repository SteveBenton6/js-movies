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
let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 2000);
};

input.addEventListener("input", onInput);
