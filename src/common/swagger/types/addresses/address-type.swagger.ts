import { ApiProperty } from "@nestjs/swagger";
import { CreateContactAddressDto } from "src/contacts/dto/create-contact-address.dto";

export class AddressType implements CreateContactAddressDto {
  @ApiProperty()
  type: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  suburb?: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  postalCode: string;

  @ApiProperty()
  country: string;
}