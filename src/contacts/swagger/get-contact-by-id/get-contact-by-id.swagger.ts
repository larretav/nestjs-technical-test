import { applyDecorators } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { GetContactsType } from "src/common/swagger/types";

export function ApiGetContactById() {

  return applyDecorators(
    ApiResponse({ status: 200, description: 'Ok', type: GetContactsType }),
  );
}