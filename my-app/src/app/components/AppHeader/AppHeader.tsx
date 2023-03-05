import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { isUserCredentialsValid } from '../../services/authService';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { setModal } from '../../state/features/modalSlice';
import { ModalTypes } from '../../types/enums/ModalTypes';
import * as storageService from '../../services/storageService';
import { HeaderLink } from './components/HeaderLink';
import { HeaderButton } from './components/HeaderButton';
import {
  selectIsAuthorized,
  setIsAuthorized,
} from '../../state/features/authSlice';
import './AppHeader.css';

export const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const headerLinks = [
    { path: '/', text: t('header.home'), id: 1 },
    { path: '/profile', text: t('header.profile'), id: 2 },
    { path: '/posts', text: t('header.posts'), id: 3 },
  ];
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isLoggedIn = isUserCredentialsValid() && isAuthorized;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogIn = () => {
    dispatch(setModal({
      modalType: ModalTypes.LOGIN_MODAL,
    }));
  };

  const handleLogOut = () => {
    dispatch(setIsAuthorized(false));
    storageService.clearStorage();
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#000',
        alignItems: 'center',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1020px',
          boxSizing: 'border-box',
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {headerLinks.map(link => (
            <MenuItem
              key={link.id}
              onClick={handleMenuClose}
            >
              <HeaderLink
                linkPath={link.path}
                text={link.text}
              />
            </MenuItem>
          ))}
        </Menu>
        <div className="header__buttons-wrapper">
          {isLoggedIn ? (
            <HeaderButton
              onClick={handleLogOut}
              buttonText={t('header.logOut')}
            />
          ) : (
            <HeaderButton
              onClick={handleLogIn}
              buttonText={t('header.logIn')}
            />
          )}
          <LanguageSelector />
        </div>
      </Toolbar>
    </AppBar>
  );
};
