import { applyDecorators } from "@nestjs/common";
import {  ApiBearerAuth, ApiParam, ApiResponse } from "@nestjs/swagger";
import { GetContactsType } from "src/common/swagger/types";

export function ApiGetContactsByTerm() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiParam({name: 'term', description: 'id | número de teléfono | nombre | apellido'}),
    ApiResponse({ status: 200, description: 'OK', isArray: true, type: GetContactsType }),
  );
}