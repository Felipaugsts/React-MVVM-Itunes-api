import axios from "axios";

export default axios.create({
  baseURL: "https://itunes.apple.com/search?media=music&entity=song&term=",
  headers: {
    "Content-type": "application/json",
  },
});
