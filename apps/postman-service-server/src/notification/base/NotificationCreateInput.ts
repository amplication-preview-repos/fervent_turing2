/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumNotificationProvider } from "./EnumNotificationProvider";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumNotificationStatus } from "./EnumNotificationStatus";

@InputType()
class NotificationCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveredAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumNotificationProvider,
  })
  @IsEnum(EnumNotificationProvider)
  @IsOptional()
  @Field(() => EnumNotificationProvider, {
    nullable: true,
  })
  provider?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  requestId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  response?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumNotificationStatus,
  })
  @IsEnum(EnumNotificationStatus)
  @IsOptional()
  @Field(() => EnumNotificationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { NotificationCreateInput as NotificationCreateInput };
