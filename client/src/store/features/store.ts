import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TaskSlice } from "./cardSlice";
import { ListSlice } from "./listSlice";

export const store = configureStore({
    reducer: {
        lists: ListSlice.reducer,
        tasks: TaskSlice.reducer,
    }
})

export const useAppDispatch: ()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
