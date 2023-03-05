import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  buttonText: string;
  onClick: () => void;
};

export const HeaderButton: React.FC<Props> = ({ onClick, buttonText }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      size="small"
      sx={{
        color: '#fff',
        fontSize: 14,
        borderColor: '#fff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        '&:hover': {
          backgroundColor: '#fff',
          color: 'black',
        },
        '@media screen and (min-width: 480px)': {
          fontSize: 16,
        },
      }}
    >
      {buttonText}
    </Button>
  );
};
