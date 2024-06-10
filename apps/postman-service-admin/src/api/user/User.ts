import { NotificationConfig } from "../notificationConfig/NotificationConfig";
import { NotificationRequest } from "../notificationRequest/NotificationRequest";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notificationConfigs?: Array<NotificationConfig>;
  notificationRequests?: Array<NotificationRequest>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
