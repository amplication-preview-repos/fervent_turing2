import { NotificationConfig as TNotificationConfig } from "../api/notificationConfig/NotificationConfig";

export const NOTIFICATIONCONFIG_TITLE_FIELD = "id";

export const NotificationConfigTitle = (
  record: TNotificationConfig
): string => {
  return record.id?.toString() || String(record.id);
};
