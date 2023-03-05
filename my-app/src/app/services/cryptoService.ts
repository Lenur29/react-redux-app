import CryptoJS from 'crypto-js';

const getEncryptedValue = (value: string, secretKey: string) => {
  const encryptedValue = CryptoJS.AES.encrypt(value, secretKey).toString();

  return encryptedValue;
};

const getDecryptedValue = (value: string, secretKey: string) => {
  const bytes = CryptoJS.AES.decrypt(value, secretKey);

  return bytes.toString(CryptoJS.enc.Utf8);
};

export {
  getEncryptedValue,
  getDecryptedValue,
};
