import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3333/api/v1"
    : "https://mobilecomprasion.herokuapp.com";

class HttpService {
  static header() {
    const token = localStorage.getItem("token");

    if (!token) return {};
    return {
      headers: {
        Authorization: `${token}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    };
  }

  static async formData(url, formData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return await axios
      .post(`${API_URL}${url}`, formData, config)
      .then((resp) => resp);
  }

  static async post(url, params = {}) {
    return await axios
      .post(`${API_URL}${url}`, params, this.header())
      .then((res) => res);
  }

  //   static async get(url, params = {}) {
  //     console.log(this.header());
  //     return await axios
  //       .get(`${API_URL}${url}`, this.header())
  //       .then((res) => res);
  //   }
  // }

  static async get(url, params = {}) {
    const header = this.header();
    const body = {
      body: params,
    };
    const paramWithHeader = { ...header, body };
    console.log(paramWithHeader, "sdsd");
    return axios.get(`${API_URL}${url}`, paramWithHeader).then((res) => res);
  }
}

export default HttpService;
