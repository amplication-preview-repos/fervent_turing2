import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "requestId";

export const NotificationTitle = (record: TNotification): string => {
  return record.requestId?.toString() || String(record.id);
};
