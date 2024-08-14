import { Injectable } from '@nestjs/common';
import { CreateSupportReportDto } from './dto/create-support-report.dto';
import { UpdateSupportReportDto } from './dto/update-support-report.dto';

@Injectable()
export class SupportReportsService {
  create(createSupportReportDto: CreateSupportReportDto) {
    return 'This action adds a new supportReport';
  }

  findAll() {
    return `This action returns all supportReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supportReport`;
  }

  update(id: number, updateSupportReportDto: UpdateSupportReportDto) {
    return `This action updates a #${id} supportReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} supportReport`;
  }
}
