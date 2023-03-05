import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import globalReducer from './features/globalSlice';
import modalReducer from './features/modalSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    global: globalReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
