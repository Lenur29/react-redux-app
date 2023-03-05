import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  onClick: () => void;
  text: string;
  startIcon?: React.ReactNode;
};

export const OutlinedButton: React.FC<Props> = ({
  onClick,
  text,
  startIcon,
}) => {
  return (
    <Button
      variant="outlined"
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        color: '#fff',
        fontSize: 14,
        borderColor: '#fff',
        marginBottom: 3,
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
      {text}
    </Button>
  );
};
