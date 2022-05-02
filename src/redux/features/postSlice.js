import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create action for repos
export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (user, { rejectWithValue }) => {
    try {
      //make the http call
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=20`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

// create action for user profile
export const fetchProfileAction = createAsyncThunk(
  "profile/list",
  async (user, { rejectWithValue }) => {
    try {
      //make the http call
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

//slices

const reposSlices = createSlice({
  name: "repos",
  initialState: {
    loading: false,
    error: null,
    profile: [],
    reposList: [],
  },
  extraReducers: (builder) => {
    //repos reducers

    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    });
    //profile reducer
    builder.addCase(fetchProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action?.payload;
    });
  },
});

export default reposSlices.reducer;
