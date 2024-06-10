import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

class UpdateNotificationStatusInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => GraphQLJSON)
    response!: InputJsonValue;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    deliveredAt?: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    requestId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    provider!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    timestamp?: Date;
}

export { UpdateNotificationStatusInput as UpdateNotificationStatusInput };