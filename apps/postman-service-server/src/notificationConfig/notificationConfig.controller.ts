import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationConfigService } from "./notificationConfig.service";
import { NotificationConfigControllerBase } from "./base/notificationConfig.controller.base";

@swagger.ApiTags("notificationConfigs")
@common.Controller("notificationConfigs")
export class NotificationConfigController extends NotificationConfigControllerBase {
  constructor(protected readonly service: NotificationConfigService) {
    super(service);
  }
}
