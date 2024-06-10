import { SortOrder } from "../../util/SortOrder";

export type NotificationConfigOrderByInput = {
  configDetails?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
