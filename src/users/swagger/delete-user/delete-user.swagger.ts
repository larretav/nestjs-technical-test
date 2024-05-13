import { applyDecorators } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

export function ApiDeleteUser() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' }),
  );
}