import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LISTS } from "../../assets/data/data";
export interface List {
  id: number;
  name: string;
}

interface Lists {
  lists: List[];
  options: string[];
}

const initialState: Lists = {
  lists: LISTS,
  options: LISTS.map((el) => el.name),
};

export const ListSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ name: string }>) => {
      state.lists.push({
        id: Date.now(),
        name: action.payload.name,
      });
      state.options = state.lists.map((el) => el.name);
    },
    deleteList: (state, action: PayloadAction<{ id: number }>) => {
      const newLists = state.lists.filter(
        (item) => item.id !== action.payload.id
      );
      state.lists = newLists;
      state.options = state.lists.map((el) => el.name);
    },
    editList: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const newLists = state.lists.map((el) =>
        el.id === action.payload.id ? { ...el, name: action.payload.name } : el
      );
      state.lists = newLists;
      state.options = state.lists.map((el) => el.name);
    },
  },
});

export default ListSlice.reducer;
export const { addList, deleteList, editList } = ListSlice.actions;
