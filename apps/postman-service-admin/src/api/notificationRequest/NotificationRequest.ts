import { User } from "../user/User";

export type NotificationRequest = {
  createdAt: Date;
  id: string;
  message: string | null;
  notificationType?: "Option1" | null;
  recipient: string | null;
  scheduledTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
