import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateUserListDto {

  @IsNotEmpty({ message: '[name] no debe ser vacío.' })
  @IsString({ message: '[name] debe ser un string.' })
  name: string;

  @IsNotEmpty({ message: '[lastName] no debe ser vacío.' })
  @IsString({ message: '[lastName] debe ser un string.' })
  lastName: string;

  @IsBoolean()
  isPaid?: boolean = false;
  
  @IsBoolean()
  isConfirmed?: boolean = false;
}
