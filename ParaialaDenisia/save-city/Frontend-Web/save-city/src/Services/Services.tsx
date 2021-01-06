import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface Services {
  readonly getUser: () => AxiosResponse<[]>;
  readonly getAllproblems: () => AxiosResponse<[]>;
  readonly Login: (data: any) => void;
  readonly updateProblem: (data: any) => void;
}

const baseURL = "https://l05.azurewebsites.net/";

export const Services = () => {
  async function getUser() {
    return await axios.get(baseURL + "Probleme/get");
  }

  async function getAllproblems() {
    return await axios.get(baseURL + "");
  }

  async function updateProblem(data: any) {
    console.log(JSON.stringify(data));
    // fetch(baseURL + "Probleme/put", {
    //   method: "PUT",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(data),
    // });
    axios
      .put(baseURL + "Probleme/put", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        console.log(response.data);
        alert("Datele s-au salvat!");
      });
  }

  async function Login(data: any) {
    console.log(JSON.stringify(data));
    return await axios.post(baseURL + "Administratori/LogIn", data);
  }

  return {
    getUser,
    getAllproblems,
    updateProblem,
    Login,
  };
};

export default Services;
