import { applyDecorators } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse } from "@nestjs/swagger";
import { ContactType } from "../../../common/swagger/types/contacts/contact-type.swagger";

export function ApiDeleteContact() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiResponse({ status: 200, description: 'Contacto eliminado correctamente' }),
  );
}