import axios from 'axios';
import { getRocketsAction } from '../redux/rockets/rockets';
import { getMissionsAction } from '../redux/missions/missions';

const getRocketsFromAPI = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const sendRequest = async () => {
    await axios.get(`${url}`)
      .then((response) => {
        const data = response.data || [];
        const rockets = data;

        dispatch(getRocketsAction(rockets));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

const getMissionsFromAPI = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const sendRequest = async () => {
    await axios.get(`${url}`)
      .then((response) => {
        const data = response.data || [];
        const missions = data;

        dispatch(getMissionsAction(missions));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

export { getRocketsFromAPI, getMissionsFromAPI };
