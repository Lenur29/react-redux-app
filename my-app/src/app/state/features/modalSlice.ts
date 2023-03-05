/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Modal } from '../../types/Modal';
import type { RootState } from '../store';

export interface ModalState {
  modal: Modal | null;
}

const initialState: ModalState = {
  modal: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      state.modal = action.payload;
    },
    removeModal: (state) => {
      state.modal = null;
    },
  },
});

export const { setModal, removeModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.modal;

export default modalSlice.reducer;
