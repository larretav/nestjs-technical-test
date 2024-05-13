import { ApiProperty } from "@nestjs/swagger";
import { ContactType } from "../contacts/contact-type.swagger";
import { GetAddressesType } from "../addresses/get-addresses-type.swagger";
import { GetPhonesType } from "../phones/get-phones-type.swagger";
import { UserType } from "./user-type.swagger";
import { CreateContactDto } from "src/contacts/dto/create-contact.dto";

export class GetUsersType extends UserType {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: string;
}