import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types/user.interface";
import { IUserFilters } from "../types/user-filters.interface";
import { api } from "../api";

interface IUserState {
  users: IUser[];
  filteredUsers: IUser[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filters: IUserFilters;
}

const initialState: IUserState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => await api.users.getAll()
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<{ field: keyof IUserFilters; value: string }>
    ) => {
      const { field, value } = action.payload;

      state.filters[field] = value;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(state.filters.name.toLowerCase()) &&
          user.username
            .toLowerCase()
            .includes(state.filters.username.toLowerCase()) &&
          user.email
            .toLowerCase()
            .includes(state.filters.email.toLowerCase()) &&
          user.phone.toLowerCase().includes(state.filters.phone.toLowerCase())
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchUsersAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsersAsync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "something went wrong :(";
    });
  },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
