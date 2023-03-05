import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as storageService from '../../services/storageService';
import { MainContainer } from '../../components/MainContainer';
import { isUserCredentialsValid } from '../../services/authService';
import { getDecryptedValue } from '../../services/cryptoService';
import { useAppSelector } from '../../state/hooks';
import { selectIsAuthorized } from '../../state/features/authSlice';
import './ProfilePage.css';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isLoggedIn = isUserCredentialsValid() && isAuthorized;
  const encryptedUserName = storageService.getItem('userName') || '';
  const userName = getDecryptedValue(encryptedUserName, 'userName');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);

  return (
    <MainContainer
      containerClassName="profile-page"
      contentClassName="profile-page__content"
    >
      {isLoggedIn ? (
        <>
          <h1 className="profile-page__title">{`Welcome ${userName}!`}</h1>
        </>
      ) : (
        null
      )}
    </MainContainer>
  );
};
