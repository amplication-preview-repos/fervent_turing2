import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type NotificationWhereInput = {
  deliveredAt?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: "Option1";
  requestId?: StringNullableFilter;
  response?: JsonFilter;
  status?: "Option1";
};
