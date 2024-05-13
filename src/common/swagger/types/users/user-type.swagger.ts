import { ApiProperty } from "@nestjs/swagger";
import { CreateContactDto } from "src/contacts/dto/create-contact.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { GetContactsType } from "../contacts/get-contacts-type.swagger";

export class UserType implements CreateUserDto  {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role?: string;

}