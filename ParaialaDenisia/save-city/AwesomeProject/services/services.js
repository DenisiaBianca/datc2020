import axios from 'axios';
export const Services = () => {
  async function getUser() {
    return await axios.get('https://localhost:44388/user');
  }

  return getUser;
};

export default Services;
