import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationRequestService } from "./notificationRequest.service";
import { NotificationRequestControllerBase } from "./base/notificationRequest.controller.base";

@swagger.ApiTags("notificationRequests")
@common.Controller("notificationRequests")
export class NotificationRequestController extends NotificationRequestControllerBase {
  constructor(protected readonly service: NotificationRequestService) {
    super(service);
  }
}
