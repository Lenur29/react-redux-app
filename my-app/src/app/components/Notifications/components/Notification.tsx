import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { removeNotification } from '../../../state/features/globalSlice';
import { useAppDispatch } from '../../../state/hooks';
import { Notification as INotification } from '../../../types/Notification';

interface Props {
  notification: INotification,
}

export const Notification: React.FC<Props> = ({ notification }) => {
  const dispatch = useAppDispatch();
  const { text, type, id } = notification;
  const hideNotification = (
    _event?: React.SyntheticEvent | Event, reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(removeNotification(id));
  };

  return (
    <Snackbar
      open
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={hideNotification}
    >
      <MuiAlert
        elevation={15}
        variant="filled"
        severity={type}
        sx={{ width: '100%' }}
        onClose={hideNotification}
      >
        {text}
      </MuiAlert>
    </Snackbar>
  );
};
