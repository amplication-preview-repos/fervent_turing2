import { NotificationConfigWhereInput } from "./NotificationConfigWhereInput";
import { NotificationConfigOrderByInput } from "./NotificationConfigOrderByInput";

export type NotificationConfigFindManyArgs = {
  where?: NotificationConfigWhereInput;
  orderBy?: Array<NotificationConfigOrderByInput>;
  skip?: number;
  take?: number;
};
