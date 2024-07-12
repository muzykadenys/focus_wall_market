import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:5001`,
//   baseURL: `https://solakey-back.onrender.com`,
});
