import {configureStore} from "@reduxjs/toolkit";
import todosReducer, { moduleName as todosModuleName, todosEntity } from './todos.store';

const store = configureStore({
  reducer: {
    [todosModuleName]: todosReducer,
  },
});

const todosSelectors = todosEntity.getSelectors(state => state[todosModuleName]);
export const selectTodos = () => todosSelectors.selectAll(store.getState());

export default store;
