import axios, { AxiosResponse } from "axios";
import { AnySoaRecord } from "dns";

export interface Services {
  readonly getUser: () => AxiosResponse<[]>;
  readonly getAllproblems: () => AxiosResponse<[]>;
  readonly updateProblem: (data: any) => void;
}

const baseURL = "https://localhost:5001/";

export const Services = () => {
  async function getUser() {
    return await axios.get(baseURL + "user");
  }

  async function getAllproblems() {
    return await axios.get(baseURL + "");
  }

  async function updateProblem(data: any) {
    console.log(JSON.stringify(data));
    axios.post(baseURL + "", JSON.stringify(data));
  }

  return {
    getUser,
    getAllproblems,
    updateProblem,
  };
};

export default Services;
