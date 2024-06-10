import { Injectable } from "@nestjs/common";

@Injectable()
export class WebhookService {
  constructor() {}
  async UpdateNotificationStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
