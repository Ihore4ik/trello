import { List } from "../../assets/common/types/interfaces";
import { apiSlice } from "./apiSlice";

export const apiListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLists: builder.query<List[], void>({
      query: () => "/lists",
      providesTags: ["List"],
    }),
    addList: builder.mutation({
      query: (body) => ({
        url: "/lists",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
      invalidatesTags: ["List"],
    }),
    deleteList: builder.mutation({
      query: (id: number) => ({
        url: `/lists/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["List"],
    }),
    updateList: builder.mutation<void, Pick<List, "id"> & Partial<List>>({
      query: ({ id, ...patch }) => ({
        url: `/lists/${id}`,
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["List"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetListsQuery,
  useAddListMutation,
  useDeleteListMutation,
  useUpdateListMutation,
} = apiListSlice;
