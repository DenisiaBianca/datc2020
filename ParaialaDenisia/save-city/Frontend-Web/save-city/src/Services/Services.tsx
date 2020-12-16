import axios, { AxiosResponse } from "axios";

export interface Services {
  readonly getMyIdea: () => AxiosResponse<any>;
}

const baseURL = "https://localhost:44388/";

export const Services = () => {
  async function getUser() {
    return await axios.get(baseURL + "user");
  }

  return {
    getUser,
  };
};

export default Services;
