import { applyDecorators } from "@nestjs/common";
import {  ApiResponse } from "@nestjs/swagger";
import { GetContactsType } from "src/common/swagger/types";

export function ApiGetContacts() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'OK', isArray: true, type: GetContactsType }),
  );
}