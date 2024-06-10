import * as graphql from "@nestjs/graphql";
import { WebhookService } from "./webhook.service";

export class WebhookResolver {
  constructor(protected readonly service: WebhookService) {}

  @graphql.Query(() => String)
  async UpdateNotificationStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateNotificationStatus(args);
  }
}
