import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationConfigServiceBase } from "./base/notificationConfig.service.base";

@Injectable()
export class NotificationConfigService extends NotificationConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
