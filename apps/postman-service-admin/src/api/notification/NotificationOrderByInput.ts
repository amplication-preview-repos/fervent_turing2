import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  deliveredAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  requestId?: SortOrder;
  response?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
