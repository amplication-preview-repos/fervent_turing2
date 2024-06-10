import { NotificationRequestWhereInput } from "./NotificationRequestWhereInput";
import { NotificationRequestOrderByInput } from "./NotificationRequestOrderByInput";

export type NotificationRequestFindManyArgs = {
  where?: NotificationRequestWhereInput;
  orderBy?: Array<NotificationRequestOrderByInput>;
  skip?: number;
  take?: number;
};
