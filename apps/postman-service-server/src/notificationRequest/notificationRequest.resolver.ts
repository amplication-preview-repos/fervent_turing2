import * as graphql from "@nestjs/graphql";
import { NotificationRequestResolverBase } from "./base/notificationRequest.resolver.base";
import { NotificationRequest } from "./base/NotificationRequest";
import { NotificationRequestService } from "./notificationRequest.service";

@graphql.Resolver(() => NotificationRequest)
export class NotificationRequestResolver extends NotificationRequestResolverBase {
  constructor(protected readonly service: NotificationRequestService) {
    super(service);
  }
}
