import { IsDateString, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateShipmentSupportReportDto {

  @IsOptional()
  @IsString({ message: '[trackNumber] debe ser un string.' })
  trackNumber?: string;

  @IsOptional()
  @IsDateString({}, { message: '[shipmentDate] no es una fecha válida' })
  shipmentDate?: Date;

  @IsOptional()
  @IsString({ message: '[branchOffice] debe ser un string.' })
  branchOffice?: string;

  @IsOptional()
  @IsString({ message: '[shipmentOrigin] debe ser un string.' })
  shipmentOrigin?: string;

  @IsOptional()
  @IsString({ message: '[shipmentDestination] debe ser un string.' })
  shipmentDestination?: string;

  @IsOptional()
  @IsIn(['en sitio', 'en transito', 'entregado', 'cancelado'], { message: '[type] debe ser "en sitio", "en transito", "entregado", "cancelado"' })
  shipmentState?: string;
  
}
