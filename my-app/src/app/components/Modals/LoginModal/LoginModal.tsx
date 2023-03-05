import { useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { LoginForm } from '../../LoginForm/LoginForm';
import { useAppDispatch } from '../../../state/hooks';
import { removeModal } from '../../../state/features/modalSlice';

const boxStyles = {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 280,
  maxWidth: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export const LoginModal = () => {
  const dispatch = useAppDispatch();

  const handleModalClose = useCallback(() => {
    dispatch(removeModal());
  }, []);

  return (
    <Modal
      open
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyles}>
        <LoginForm onClose={handleModalClose} />
      </Box>
    </Modal>
  );
};
