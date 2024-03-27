import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TASKS } from "../../assets/data/data";
export interface ICard {
  id: number;
  name: string;
  description: string;
  priority: string;
  status: string;
  date: string;
}

export interface ICards {
  cards: ICard[];
}

const initialState: ICards = {
  cards: TASKS,
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const newTasks = state.cards.filter((el) => el.id !== action.payload.id);
      state.cards = newTasks;
    },
    addTask: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        description: string;
        priority: string;
        status: string;
        date: string
      }>
    ) => {
      state.cards.push(action.payload);
    },
    moveToList: (
      state,
      action: PayloadAction<{ status: string; id: number }>
    ) => {
      const newTasks = state.cards.map((item) =>
        item.id === action.payload.id
          ? { ...item, status: action.payload.status }
          : item
      );
      state.cards = newTasks;
    },
  },
});

export default TaskSlice.reducer;
export const { addTask, deleteTask, moveToList } = TaskSlice.actions;
