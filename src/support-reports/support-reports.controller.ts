import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SupportReportsService } from './support-reports.service';
import { CreateSupportReportDto } from './dto/create-support-report.dto';
import { UpdateSupportReportDto } from './dto/update-support-report.dto';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';

@ApiTags('Registro de Soportes')
@Controller('support-reports')
export class SupportReportsController {
  constructor(private readonly supportReportsService: SupportReportsService) {}

  @Post()
  create(@Body() createSupportReportDto: CreateSupportReportDto) {
    return this.supportReportsService.create(createSupportReportDto);
  }

  @Get()
  findAll() {
    return this.supportReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.supportReportsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSupportReportDto: UpdateSupportReportDto) {
    return this.supportReportsService.update(id, updateSupportReportDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.supportReportsService.remove(id);
  }
}
