import { JsonValue } from "type-fest";

export type Notification = {
  createdAt: Date;
  deliveredAt: Date | null;
  id: string;
  provider?: "Option1" | null;
  requestId: string | null;
  response: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
