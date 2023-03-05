import * as storageService from './storageService';
import { getDecryptedValue } from './cryptoService';

const isUserCredentialsValid = () => {
  const encryptedUserName = storageService.getItem('userName') || '';
  const encryptedPassword = storageService.getItem('password') || '';
  const decryptedUserName = getDecryptedValue(encryptedUserName, 'userName');
  const decryptedPassword = getDecryptedValue(encryptedPassword, 'password');

  return decryptedUserName === 'admin' && decryptedPassword === '12345';
};

export {
  isUserCredentialsValid,
};
