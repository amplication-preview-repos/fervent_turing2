import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type NotificationConfig = {
  configDetails: JsonValue;
  createdAt: Date;
  id: string;
  provider?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
