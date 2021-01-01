import axios, { AxiosResponse } from "axios";

export interface Services {
  readonly getUser: () => AxiosResponse<[]>;
}

const baseURL = "https://localhost:5001/";

export const Services = () => {
  async function getUser() {
    return await axios.get(baseURL + "user");
  }

  return {
    getUser,
  };
};

export default Services;
