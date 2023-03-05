import { useAppSelector } from '../../state/hooks';
import { ModalTypes } from '../../types/enums/ModalTypes';
import { LoginModal } from './LoginModal';
import { selectModal } from '../../state/features/modalSlice';

const MODALS = {
  [ModalTypes.LOGIN_MODAL]: LoginModal,
};

export const Modals = () => {
  const modal = useAppSelector(selectModal);

  if (!modal) {
    return null;
  }

  const { modalType } = modal;

  const SelectedModal = MODALS[modalType];

  return (
    <SelectedModal />
  );
};
