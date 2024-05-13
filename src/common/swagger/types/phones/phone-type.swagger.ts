import { ApiProperty } from "@nestjs/swagger";
import { CreateContactPhoneDto } from "src/contacts/dto/create-contact-phone.dto";

export class PhoneType implements CreateContactPhoneDto {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  type: string;

}