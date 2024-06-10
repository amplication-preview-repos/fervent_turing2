import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationRequestUpdateInput = {
  message?: string | null;
  notificationType?: "Option1" | null;
  recipient?: string | null;
  scheduledTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
