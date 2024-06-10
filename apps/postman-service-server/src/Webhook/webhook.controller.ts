import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebhookService } from "./webhook.service";

@swagger.ApiTags("webhooks")
@common.Controller("webhooks")
export class WebhookController {
  constructor(protected readonly service: WebhookService) {}

  @common.Get("/:id/update-notification-status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateNotificationStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateNotificationStatus(body);
      }
}
