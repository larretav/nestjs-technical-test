import { IsArray, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateContactPhoneDto {

  @IsNotEmpty({message: '[type] es requerido'})
  @IsIn(['casa', 'móvil', 'trabajo'], { message: '[type] debe ser casa, móvil o trabajo' })
  type: string;

  @IsNotEmpty({message: '[phoneNumber] es requerido'})
  phoneNumber: string

}
