import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    authorization: "Client-ID XXp2scpTl9fkJMehQMZS_XeHJBtYdk7aFWdVolwUuaw",
  },
});
