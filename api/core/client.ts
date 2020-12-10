import axios, {AxiosInstance} from 'axios';
import {getAuthorizationService} from "../../factories";

export const getApiClient = (params?: any): AxiosInstance => {
  const authService = getAuthorizationService();
  const headers: Record<string, string> = {};

  if (!params?.withoutAuth)
    headers.authorization = `Bearer ${authService.getToken()}`;

  return axios.create({
    headers,
  });
}
