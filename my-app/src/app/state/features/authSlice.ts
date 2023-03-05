/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface AuthState {
  isAuthorized: boolean;
}

const initialState: AuthState = {
  isAuthorized: !!localStorage.getItem('isAuthorized') === true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
      localStorage.setItem('isAuthorized', JSON.stringify(action.payload));
    },
  },
});

export const { setIsAuthorized } = authSlice.actions;

export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;

export default authSlice.reducer;
