import { Module } from "@nestjs/common";
import { NotificationRequestModuleBase } from "./base/notificationRequest.module.base";
import { NotificationRequestService } from "./notificationRequest.service";
import { NotificationRequestController } from "./notificationRequest.controller";
import { NotificationRequestResolver } from "./notificationRequest.resolver";

@Module({
  imports: [NotificationRequestModuleBase],
  controllers: [NotificationRequestController],
  providers: [NotificationRequestService, NotificationRequestResolver],
  exports: [NotificationRequestService],
})
export class NotificationRequestModule {}
