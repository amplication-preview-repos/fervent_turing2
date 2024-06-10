import * as graphql from "@nestjs/graphql";
import { NotificationConfigResolverBase } from "./base/notificationConfig.resolver.base";
import { NotificationConfig } from "./base/NotificationConfig";
import { NotificationConfigService } from "./notificationConfig.service";

@graphql.Resolver(() => NotificationConfig)
export class NotificationConfigResolver extends NotificationConfigResolverBase {
  constructor(protected readonly service: NotificationConfigService) {
    super(service);
  }
}
