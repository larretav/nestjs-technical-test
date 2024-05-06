import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateContactPhoneDto } from "./create-contact-phone.dto";
import { Type } from "class-transformer";
import { CreateContactAddressDto } from "./create-contact-address.dto";

export class CreateContactDto {

  @IsNotEmpty({ message: '[name] no debe ser vacío.' })
  @IsString({ message: '[name] debe ser un string.' })
  name: string;

  @IsNotEmpty({ message: '[lastName] no debe ser vacío.' })
  @IsString({ message: '[lastName] debe ser un string.' })
  lastName: string;

  @IsNotEmpty({ message: '[email] no debe ser vacío.' })
  @IsEmail({}, { message: '[email] no tiene un formato válido.' })
  email: string;


  @IsOptional()
  status?: string;


  @IsOptional()
  @IsArray({message: '[phones] debe ser un array'})
  @ValidateNested({ each: true })
  @Type(() => CreateContactPhoneDto)
  phones?: CreateContactPhoneDto[];

  @IsOptional()
  @IsArray({message: '[phones] debe ser un array'})
  @ValidateNested({ each: true })
  @Type(() => CreateContactAddressDto)
  addresses?: CreateContactAddressDto[];
}
