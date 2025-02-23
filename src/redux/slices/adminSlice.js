import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  adminInfo: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('adminInfo') || 'null') : null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminDetails: (state, action) => {
      state.adminInfo = action.payload.adminInfo;
      state.token = action.payload.token;
      localStorage.setItem('adminInfo', JSON.stringify(action.payload.adminInfo));
      localStorage.setItem('token', action.payload.token);
    },
    clearAdminDetails: (state) => {
      state.adminInfo = null;
      state.token = null;
      localStorage.removeItem('adminInfo');
      localStorage.removeItem('token');
    },
  },
});

export const { setAdminDetails, clearAdminDetails } = adminSlice.actions;

export default adminSlice.reducer;
