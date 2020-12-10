import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {fetchTodos} from "../api/todos.api";
import {TodoItem} from "../types/todos.types";

export const moduleName = 'todos';

export const fetchTodosThunk = createAsyncThunk(
  `${moduleName}/fetchTodos`,
  async () => {
    const { data } = await fetchTodos();
    return data;
  }
);

export const todosEntity = createEntityAdapter({
  selectId: (todo: TodoItem) => todo.id,
});

const { reducer, actions } = createSlice({
  name: moduleName,
  initialState: todosEntity.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchTodosThunk.fulfilled.type]: (state, action) => {
      console.log(action)
      todosEntity.setAll(state, action.payload);
    },
  }
});

// export {} = actions;

export default reducer;
