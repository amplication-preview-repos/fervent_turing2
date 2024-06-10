import { NotificationRequest as TNotificationRequest } from "../api/notificationRequest/NotificationRequest";

export const NOTIFICATIONREQUEST_TITLE_FIELD = "id";

export const NotificationRequestTitle = (
  record: TNotificationRequest
): string => {
  return record.id?.toString() || String(record.id);
};
