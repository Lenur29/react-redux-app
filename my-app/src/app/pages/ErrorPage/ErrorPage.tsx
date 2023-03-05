import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1>Oops, something went wrong!</h1>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          color: '#fff',
        }}
      >
        Try again
      </Button>
    </div>
  );
};
