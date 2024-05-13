import { ApiProperty } from "@nestjs/swagger";
import { PhoneType } from "./phone-type.swagger";

export class GetPhonesType extends PhoneType {
  @ApiProperty()
  id: string;
}