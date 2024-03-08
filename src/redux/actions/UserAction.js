import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserServices } from "../../services";

const { loginUser, registerUser } = UserServices;

export const UserRegistraion = createAsyncThunk(
    'UserRegistraion',
    async (userDetail, thunkAPI) => {
      try {        
        const response = await registerUser(userDetail);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const UserLogin = createAsyncThunk(
  'UserLogin',
  async (postData, thunkAPI) => {
    try {        
      const response = await loginUser(postData);
      console.log(response);
      if(response.success){
        localStorage.setItem('user_details', JSON.stringify(response.data));
        return response;      
      }else{
        return null;      
      }      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);