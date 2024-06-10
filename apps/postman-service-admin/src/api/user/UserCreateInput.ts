import { NotificationConfigCreateNestedManyWithoutUsersInput } from "./NotificationConfigCreateNestedManyWithoutUsersInput";
import { NotificationRequestCreateNestedManyWithoutUsersInput } from "./NotificationRequestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notificationConfigs?: NotificationConfigCreateNestedManyWithoutUsersInput;
  notificationRequests?: NotificationRequestCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
