import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { ContactType } from "../../../common/swagger/types/contacts/contact-type.swagger";
import { updateContactBody } from "./update-contact-body.swagger";

export function ApiUpdateContact() {
  return applyDecorators(
    ApiBody({
      type: ContactType,
      examples: updateContactBody
    }),
    ApiResponse({ status: 200, description: 'OK', type: ContactType }),
  );
}