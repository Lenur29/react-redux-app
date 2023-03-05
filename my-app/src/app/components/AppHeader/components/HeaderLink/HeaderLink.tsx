import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLink.css';

type Props = {
  text: string;
  linkPath: string,
};

export const HeaderLink: React.FC<Props> = ({ text, linkPath }) => {
  return (
    <Link to={linkPath} className="header__link">
      {text}
    </Link>
  );
};
