import { NotificationTypes } from '../enums/NotificationTypes';

export interface Notification {
  text: string;
  type: NotificationTypes;
  id: string;
}
