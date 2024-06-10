import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationConfigWhereInput = {
  configDetails?: JsonFilter;
  id?: StringFilter;
  provider?: "Option1";
  user?: UserWhereUniqueInput;
};
