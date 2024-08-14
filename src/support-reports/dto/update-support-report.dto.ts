import { PartialType } from '@nestjs/swagger';
import { CreateSupportReportDto } from './create-support-report.dto';

export class UpdateSupportReportDto extends PartialType(CreateSupportReportDto) {}
