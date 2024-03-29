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
  oneCard: ICard | null;
}

const initialState: ICards = {
  cards: TASKS,
  oneCard: null,
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const newTasks = state.cards.filter((el) => el.id !== action.payload.id);
      state.cards = newTasks;
    },
    addTask: (state, action: PayloadAction<{ status: string }>) => {
      state.cards.push({
        id: Date.now(),
        name: "Task",
        description: "Task description",
        priority: "Low",
        status: action.payload.status,
        date: new Date().toISOString().split("T")[0],
      });
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
    setStatus: (
      state,
      action: PayloadAction<{ oldStatus: string; newStatus: string }>
    ) => {
      const newTasks = state.cards.map((el) =>
        el.status === action.payload.oldStatus
          ? { ...el, status: action.payload.newStatus }
          : el
      );
      state.cards = newTasks;
    },
    getOneCard: (state, action: PayloadAction<{ id: number }>) => {
      state.oneCard = state.cards.filter(
        (el) => el.id === action.payload.id
      )[0];
    },
    resetOneCard: (state) => {
      state.oneCard = null;
    },
    editTask: (state, action: PayloadAction<ICard>) => {
      const newCards = state.cards.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      state.cards = newCards;
    },
  },
});

export default TaskSlice.reducer;
export const {
  addTask,
  deleteTask,
  moveToList,
  setStatus,
  getOneCard,
  resetOneCard,
  editTask,
} = TaskSlice.actions;
