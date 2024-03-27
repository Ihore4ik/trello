import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LISTS } from "../../assets/data/data";
export interface List {
  id: number;
  name: string;
}

interface Lists {
  lists: List[];
}

const initialState: Lists = {
  lists: LISTS,
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
    },
    deleteList: (state, action: PayloadAction<{ id: number }>) => {
      state.lists.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default ListSlice.reducer;
export const { addList, deleteList } = ListSlice.actions;
