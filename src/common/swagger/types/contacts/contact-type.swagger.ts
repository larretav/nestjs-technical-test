import { ApiProperty } from "@nestjs/swagger";
import { CreateContactDto } from "src/contacts/dto/create-contact.dto";
import { PhoneType, AddressType } from "..";

export class ContactType implements CreateContactDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ isArray: true, type: PhoneType })
  phones?: PhoneType[];

  @ApiProperty({ isArray: true, type: AddressType })
  addresses?: AddressType[];
}