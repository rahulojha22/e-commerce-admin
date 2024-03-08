import { configureStore } from '@reduxjs/toolkit';
// import userDetailReducer from './slices/userDetailSlice';
import { reducers } from './slices/index';

const { addDataReducer, userDetailReducer} = reducers;

export const store = configureStore({
    reducer: {
        addData: addDataReducer,
        userDetail: userDetailReducer,
    },
})
  