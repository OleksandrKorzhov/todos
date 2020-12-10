import {JWTHost, LoginParams} from "../types/authorization.types";
import {getApiClient} from "./core/client";
import {AxiosResponse} from "axios";

export const login = (params: LoginParams): Promise<AxiosResponse<JWTHost>> => getApiClient()
  .post<JWTHost>('https://academeez-login-ex.herokuapp.com/api/users/login', params, {
    headers: {
      'content-type': 'application/json'
    }
  });
