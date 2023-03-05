import React from 'react';

type Props = {
  src: string;
  alt: string,
  className: string,
};

export const Image: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  );
};
