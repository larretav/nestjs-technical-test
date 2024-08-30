import { IsNotEmpty, IsString } from "class-validator";

export class CreateShipmentDto {
  @IsNotEmpty({ message: '[trackingNumber] no debe ser vacío.' })
  @IsString({ message: '[trackingNumber] debe ser un string.' })
  trackingNumber: string;

  @IsNotEmpty({ message: '[userName] no debe ser vacío.' })
  @IsString({ message: '[userName] debe ser un string.' })
  userName: string;

  @IsNotEmpty({ message: '[date] no debe ser vacío.' })
  @IsString({ message: '[date] debe ser un string.' })
  date: string;

  @IsNotEmpty({ message: '[branchOffice] no debe ser vacío.' })
  @IsString({ message: '[branchOffice] debe ser un string.' })
  branchOffice: string;

  @IsNotEmpty({ message: '[origin] no debe ser vacío.' })
  @IsString({ message: '[origin] debe ser un string.' })
  origin: string;

  @IsNotEmpty({ message: '[destination] no debe ser vacío.' })
  @IsString({ message: '[destination] debe ser un string.' })
  destination: string;

  @IsNotEmpty({ message: '[shipmentStatus] no debe ser vacío.' })
  @IsString({ message: '[shipmentStatus] debe ser un string.' })
  shipmentStatus: string;

}
