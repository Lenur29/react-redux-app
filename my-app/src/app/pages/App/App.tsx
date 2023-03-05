import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../components/AppHeader';
import { AppFooter } from '../../components/AppFooter';
import { Notifications } from '../../components/Notifications';
import { Modals } from '../../components/Modals';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Notifications />
      <Modals />
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};
