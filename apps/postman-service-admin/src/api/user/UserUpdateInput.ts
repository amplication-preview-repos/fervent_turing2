import { NotificationConfigUpdateManyWithoutUsersInput } from "./NotificationConfigUpdateManyWithoutUsersInput";
import { NotificationRequestUpdateManyWithoutUsersInput } from "./NotificationRequestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notificationConfigs?: NotificationConfigUpdateManyWithoutUsersInput;
  notificationRequests?: NotificationRequestUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
