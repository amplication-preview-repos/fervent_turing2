import { Module } from "@nestjs/common";
import { NotificationConfigModuleBase } from "./base/notificationConfig.module.base";
import { NotificationConfigService } from "./notificationConfig.service";
import { NotificationConfigController } from "./notificationConfig.controller";
import { NotificationConfigResolver } from "./notificationConfig.resolver";

@Module({
  imports: [NotificationConfigModuleBase],
  controllers: [NotificationConfigController],
  providers: [NotificationConfigService, NotificationConfigResolver],
  exports: [NotificationConfigService],
})
export class NotificationConfigModule {}
