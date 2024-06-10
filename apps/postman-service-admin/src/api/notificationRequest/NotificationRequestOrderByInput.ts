import { SortOrder } from "../../util/SortOrder";

export type NotificationRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationType?: SortOrder;
  recipient?: SortOrder;
  scheduledTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
