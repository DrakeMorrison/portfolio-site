import axios from 'axios';
import constants from '../constants';

async function getRequest() {
  const response = await axios.get(`${constants.firebaseConfig.databaseURL}/projects.json`);
  return await response.data;
}

export default { getRequest };
