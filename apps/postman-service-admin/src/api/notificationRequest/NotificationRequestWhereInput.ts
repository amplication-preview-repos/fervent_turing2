import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationRequestWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationType?: "Option1";
  recipient?: StringNullableFilter;
  scheduledTime?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
