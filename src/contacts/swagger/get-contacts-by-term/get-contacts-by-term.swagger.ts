import { applyDecorators } from "@nestjs/common";
import {  ApiParam, ApiResponse } from "@nestjs/swagger";
import { GetContactsType } from "src/common/swagger/types";

export function ApiGetContactsByTerm() {
  return applyDecorators(
    ApiParam({name: 'term', description: 'id | número de teléfono | nombre | apellido'}),
    ApiResponse({ status: 200, description: 'Ok', isArray: true, type: GetContactsType }),
  );
}