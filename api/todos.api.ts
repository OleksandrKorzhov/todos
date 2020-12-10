import {getApiClient} from "./core/client";
import {TodoItem} from "../types/todos.types";
import {AxiosResponse} from "axios";

export const fetchTodos = (): Promise<AxiosResponse<TodoItem[]>> => getApiClient().get<TodoItem[]>('https://academeez-login-ex.herokuapp.com/api/tasks');
