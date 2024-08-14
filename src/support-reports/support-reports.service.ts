import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupportReportDto } from './dto/create-support-report.dto';
import { UpdateSupportReportDto } from './dto/update-support-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportReport } from './entities/support-report.entity';
import { Repository } from 'typeorm';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';

@Injectable()
export class SupportReportsService {


  constructor(
    @InjectRepository(SupportReport)
    private readonly supportReportsRepository: Repository<SupportReport>,
  ) { }

  async create(createSupportReportDto: CreateSupportReportDto) {
    try {
      const { shipmentDetails = {}, ...restCreateSupportReportDto } = createSupportReportDto;
      const newSupport = this.supportReportsRepository.create({ ...restCreateSupportReportDto, ...shipmentDetails });
      await this.supportReportsRepository.save(newSupport);

      return 'Registrado correctamente';
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const supports = await this.supportReportsRepository.find({ where: { status: 'A' } });

      return supports.map(item => {
        const { shipmentDate, shipmentDestination, shipmentOrigin, branchOffice, shipmentState, trackNumber, ...rest } = item;
        return {
          ...rest,
          shipmentDetails: {
            shipmentDate, shipmentDestination, shipmentOrigin, branchOffice, shipmentState, trackNumber
          }
        }
      })
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const support = await this.supportReportsRepository.findOne({
        where: { id, status: 'A' }
      });

      if (!support)
        throw new NotFoundException('Reporte no encontrado')

      const { shipmentDate, shipmentDestination, shipmentOrigin, branchOffice, shipmentState, trackNumber, ...rest } = support;
      return {
        ...rest,
        shipmentDetails: {
          shipmentDate, shipmentDestination, shipmentOrigin, branchOffice, shipmentState, trackNumber
        }
      }
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async update(id: string, updateSupportReportDto: UpdateSupportReportDto) {
    try {

      const { shipmentDetails = {},  ...restUpdateSupportReportDto} = updateSupportReportDto;

      await this.findOne(id);

      await this.supportReportsRepository.update({ id }, {...restUpdateSupportReportDto, ...shipmentDetails});

      return 'Reporte actualizado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const support = await this.findOne(id);

      await this.supportReportsRepository.update({ id: support.id }, { status: 'I' });

      return 'Reporte eliminado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }
}
