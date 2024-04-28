import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  count: number;
}

const initialState: AuthState = { count: 30 };

export const addAsync = createAsyncThunk("addAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

export const delAsync = createAsyncThunk("delAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 2;
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    del: (state) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state) => {
      state.count = state.count + 1;
    });
    builder.addCase(delAsync.fulfilled, (state, action) => {
      state.count = state.count - action.payload;
    });
    // builder.addCase("delAsync", (state) => {
    //   state.count = state.count - 1;
    // });
  },
});
export const { add, del } = counterSlice.actions;
export const counterSelector = (state: RootState) => state.counterReducer;
export default counterSlice.reducer;
