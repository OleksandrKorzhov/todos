import {configureStore, createSelector} from "@reduxjs/toolkit";
import todosReducer, {moduleName as todosModuleName, todosEntity} from './todos.store';
import userReducer, {moduleName as userModuleName, userEntity} from './user.store';

const store = configureStore({
  reducer: {
    [todosModuleName]: todosReducer,
    [userModuleName]: userReducer,
  },
});

const todosSelectors = todosEntity.getSelectors(state => state[todosModuleName]);
export const selectTodos = () => todosSelectors.selectAll(store.getState());

const userSelectors = userEntity.getSelectors(state => state[userModuleName]);
export const selectIsUserAuthorized = createSelector(state => state[userModuleName], userState => userState.isLoggedIn);

export default store;
