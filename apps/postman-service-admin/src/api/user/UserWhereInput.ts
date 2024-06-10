import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationConfigListRelationFilter } from "../notificationConfig/NotificationConfigListRelationFilter";
import { NotificationRequestListRelationFilter } from "../notificationRequest/NotificationRequestListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notificationConfigs?: NotificationConfigListRelationFilter;
  notificationRequests?: NotificationRequestListRelationFilter;
  username?: StringFilter;
};
