import { ApiProperty } from "@nestjs/swagger";
import { AddressType } from "./address-type.swagger";

export class GetAddressesType extends AddressType {
  @ApiProperty()
  id: string;
}