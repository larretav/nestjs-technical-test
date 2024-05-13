import { applyDecorators } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ContactType } from "../../../common/swagger/types/contacts/contact-type.swagger";

export function ApiDeleteContact() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Contacto eliminado correctamente' }),
  );
}