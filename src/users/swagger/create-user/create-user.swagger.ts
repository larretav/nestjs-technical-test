import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { createUserBody } from "./create-user-body.swagger";
import { UserType } from "src/common/swagger/types/users/user-type.swagger";

export function ApiCreateUser() {
  return applyDecorators(
    ApiBody({
      type: UserType,
      examples: createUserBody
    }),
    ApiResponse({ status: 201, description: 'Usuario registrado correctamente' }),
    )
}