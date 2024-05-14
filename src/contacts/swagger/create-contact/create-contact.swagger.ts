import { applyDecorators } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiResponse } from "@nestjs/swagger";
import { createContactBody } from "./create-contact-body.swagger";
import { ContactType } from "../../../common/swagger/types/contacts/contact-type.swagger";

export function ApiCreateContact() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiBody({
      type: ContactType,
      examples: createContactBody
    }),
    ApiResponse({ status: 200, description: 'Contacto registrado correctamente' }),
  );
}