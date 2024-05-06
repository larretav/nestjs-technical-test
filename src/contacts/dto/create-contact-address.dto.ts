import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, isNotEmpty } from "class-validator"

export class CreateContactAddressDto {

  @IsNotEmpty()
  @IsIn(['casa', 'oficina', 'trabajo'], { message: '[type] debe ser casa, oficina o trabajo' })
  type: string;

  @IsNotEmpty()
  @IsString({ message: '[street] debe ser un string' })
  street: string;

  @IsNotEmpty()
  number: string;

  @IsOptional()
  @IsString({ message: '[suburb] debe ser un string' })
  suburb?: string;

  @IsNotEmpty()
  @IsString({ message: '[city] debe ser un string' })
  city: string;

  @IsNotEmpty()
  @IsString({ message: '[state] debe ser un string' })
  state: string;

  @IsNotEmpty()
  @IsString({ message: '[postalCode] debe ser un string' })
  postalCode: string;

  @IsNotEmpty()
  @IsString({ message: '[country] debe ser un string' })
  country: string;




}
