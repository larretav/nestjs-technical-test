import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { ContactType } from "../../../common/swagger/types/contacts/contact-type.swagger";
import { updateUserBody } from "./update-user-body.swagger";
import { UserType } from "src/common/swagger/types/users/user-type.swagger";

export function ApiUpdateUser() {
  return applyDecorators(
    ApiBody({
      type: UserType,
      examples: updateUserBody
    }),
    ApiResponse({ status: 200, description: 'Usuario actualizado correctamente' }),
  );
}