import { useAppSelector } from '../../state/hooks';
import { selectNotifications } from '../../state/features/globalSlice';
import { Notification } from './components/Notification';

export const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);

  return (
    <>
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          notification={notification}
        />
      ))}
    </>
  );
};
