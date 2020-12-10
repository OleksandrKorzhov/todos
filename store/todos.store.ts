import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

export const moduleName = 'todos';

export const todosEntity = createEntityAdapter({
  selectId: (todo: Record<string, any>) => todo.id,
});

const { reducer, actions } = createSlice({
  name: moduleName,
  initialState: todosEntity.getInitialState(),
  reducers: {}
});

// export {} = actions;

export default reducer;
