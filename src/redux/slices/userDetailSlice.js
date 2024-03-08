import { createSlice } from '@reduxjs/toolkit';
import { UserDetails } from '../actions';

const { UserLogin, UserRegistraion } = UserDetails;

const initialState = {
  userData: null,
  loading: false,
  error: null
}

export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    userDetail: (state) => {      
      state.value += 1
    }    
  },  
  extraReducers: (builder)=>{
    builder
      .addCase(UserRegistraion.pending, (state)=>{
        state.loading = true;
      })
      .addCase(UserRegistraion.fulfilled, (state, action)=>{
        state.loading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(UserRegistraion.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UserLogin.pending, (state)=>{
        state.loading = true;
      })
      .addCase(UserLogin.fulfilled, (state, action)=>{        
        state.loading = false;
        state.userData = action.payload.data;
        state.error = null;
      })
      .addCase(UserLogin.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
  }
})

// Action creators are generated for each case reducer function
export const { userDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer;