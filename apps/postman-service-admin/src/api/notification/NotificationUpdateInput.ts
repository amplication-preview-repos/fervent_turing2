import { InputJsonValue } from "../../types";

export type NotificationUpdateInput = {
  deliveredAt?: Date | null;
  provider?: "Option1" | null;
  requestId?: string | null;
  response?: InputJsonValue;
  status?: "Option1" | null;
};
