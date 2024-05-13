import { ApiProperty } from "@nestjs/swagger";
import { ContactType } from "../contacts/contact-type.swagger";
import { GetAddressesType } from "../addresses/get-addresses-type.swagger";
import { GetPhonesType } from "../phones/get-phones-type.swagger";

export class GetContactsType implements ContactType {

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ isArray: true, type: GetPhonesType })
  phones?: GetPhonesType[];

  @ApiProperty({ isArray: true, type: GetAddressesType })
  addresses?: GetAddressesType[];

}