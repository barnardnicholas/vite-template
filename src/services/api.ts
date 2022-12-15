import axiosOrigin, { AxiosError } from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const instance = axiosOrigin.create({ headers });

export default instance;
