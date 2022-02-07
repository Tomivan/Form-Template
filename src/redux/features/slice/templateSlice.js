import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTemplates = createAsyncThunk(
  "templates/getTemplates",
  async () => {
    try {
      const response = await axios.get(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      );
      const { data } = response;
      return data;
    } catch (error) {
      console.log({ ...error });
    }
  }
);

const templateSlice = createSlice({
  name: "templates",
  initialState: {
    templateList: [],
    loading: true,
    errors: false,
  },
  reducers: {},
  extraReducers: {
    [getTemplates.pending]: (state) => {
      state.loading = true;
    },
    [getTemplates.fulfilled]: (state, { payload: templateList }) => {
      state.templateList = templateList;
      state.loading = false;
      state.errors = false;
    },
  },
});

export default templateSlice.reducer;