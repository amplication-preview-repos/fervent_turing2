import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationConfigUpdateInput = {
  configDetails?: InputJsonValue;
  provider?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
