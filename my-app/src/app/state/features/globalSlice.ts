/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Notification } from '../../types/Notification';
import type { RootState } from '../store';
import { NotificationTypes } from '../../enums/NotificationTypes';

export interface State {
  notifications: Notification[];
}

const initialState: State = {
  notifications: [],
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Notification>) => {
      const prevNotifications = [...state.notifications];

      if (prevNotifications.some(
        notification => notification.text === action.payload.text,
      )) {
        return state;
      }

      const newNotifications = [...prevNotifications, action.payload];

      return { ...state, notifications: newNotifications };
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload,
      );
    },
  },
});

export const selectNotifications = (state: RootState) => (
  state.global.notifications
);

export const {
  setNotification,
  removeNotification,
} = globalSlice.actions;

export const setNotificationInfo = (
  { text }: Omit<Notification, 'type' | 'id'>,
) => (
  setNotification({
    text,
    type: NotificationTypes.INFO,
    id: uuidv4(),
  })
);

export const setNotificationError = (
  { text }: Omit<Notification, 'type' | 'id'>,
) => (
  setNotification({
    text,
    type: NotificationTypes.ERROR,
    id: uuidv4(),
  })
);

export default globalSlice.reducer;
