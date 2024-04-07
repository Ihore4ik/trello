import { Task } from "../../assets/common/types/interfaces";
import { apiSlice } from "./apiSlice";

export const apiTaskSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id: number) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation<void, Pick<Task, "id"> & Partial<Task>>({
      query: ({ id, ...patch }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Task"],
    }),
    moveToList: builder.mutation<void, Pick<Task, "id"> & Partial<Task>>({
      query: ({ id, ...patch }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useMoveToListMutation
} = apiTaskSlice;
