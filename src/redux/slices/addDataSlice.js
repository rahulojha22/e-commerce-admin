import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null
}

const addDataSlice = createSlice({
    name: 'addData',
    initialState,
    reducers: {
        setData: (state, action)=>{
            state.data = action.payload
        },
        resetData: (state)=>{
            state.data = null
        }
    }
});

export const { setData, resetData } = addDataSlice.actions;

export default addDataSlice.reducer;