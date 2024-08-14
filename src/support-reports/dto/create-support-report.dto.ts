import { IsDateString, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateShipmentSupportReportDto } from "./shipment-support-report.dto";
import { Type } from "class-transformer";

export class CreateSupportReportDto {

  @IsNotEmpty({ message: '[name] no debe ser vacío.' })
  @IsString({ message: '[name] debe ser un string.' })
  type: string;

  @IsNotEmpty({ message: '[user] no debe ser vacío.' })
  @IsString({ message: '[user] debe ser un string.' })
  user: string;

  @IsNotEmpty({ message: '[date] no debe ser vacío.' })
  @IsDateString({}, { message: '[date] no es una fecha válida' })
  date: Date;

  @IsOptional()
  @IsString({ message: '[problemDescription] debe ser un string.' })
  problemDescription: string

  @IsOptional()
  @IsString({ message: '[solutionDescription] debe ser un string.' })
  solutionDescription: string

  @IsNotEmpty({ message: '[supportState] es requerido' })
  @IsIn(['en progreso', 'pendiente', 'cancelado', 'completado'], { message: '[supportState] debe ser "en progreso", "pendiente", "cancelado", "completado"' })
  supportState: string;

  @IsOptional()
  @Type(() => CreateShipmentSupportReportDto)
  shipmentDetails?: CreateShipmentSupportReportDto;

}
