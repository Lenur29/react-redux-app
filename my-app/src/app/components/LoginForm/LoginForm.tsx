import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { getEncryptedValue } from '../../services/cryptoService';
import { useAppDispatch } from '../../state/hooks';
import { setNotificationError } from '../../state/features/globalSlice';
import { setIsAuthorized } from '../../state/features/authSlice';
import './LoginForm.css';

type Props = {
  onClose: () => void,
};

export const LoginForm: React.FC<Props> = React.memo(({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };
    const enteredUserName = target.username.value;
    const enterePassword = target.password.value;

    if (enteredUserName === 'admin' && enterePassword === '12345') {
      // In a real-world application, the secret key should be stored in a secure configuration source such as a key management system, environment variable, etc.
      const encryptedUserName = getEncryptedValue(userName, 'userName');
      const encryptedPassword = getEncryptedValue(password, 'password');

      localStorage.setItem('userName', encryptedUserName);
      localStorage.setItem('password', encryptedPassword);
      dispatch(setIsAuthorized(true));
      onClose();
      navigate('/profile');
    } else {
      dispatch(setNotificationError({
        text: 'User name or password is wrong',
      }));
    }
  };

  return (
    <FormControl sx={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <form className="authorization-form" onSubmit={handleLogIn}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          onChange={handleUserNameChange}
          required
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={handlePasswordChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Log in
        </Button>
      </form>
    </FormControl>
  );
});
