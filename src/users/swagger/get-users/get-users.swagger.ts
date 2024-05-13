import { applyDecorators } from "@nestjs/common";
import {  ApiResponse } from "@nestjs/swagger";
import { GetUsersType } from "src/common/swagger/types";

export function ApiGetUsers() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'OK', isArray: true, type: GetUsersType }),
  );
}