import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationRequestServiceBase } from "./base/notificationRequest.service.base";

@Injectable()
export class NotificationRequestService extends NotificationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
