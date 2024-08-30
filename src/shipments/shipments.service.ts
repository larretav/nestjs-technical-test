import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment.entity';
import { Repository } from 'typeorm';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';

@Injectable()
export class ShipmentsService {


  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) { }

  async create(createShipmentDto: CreateShipmentDto[]) {
    try {
      const newShipments = await this.shipmentRepository.insert(createShipmentDto);
      console.log(newShipments)

      return 'Registrado correctamente';
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const shipments = await this.shipmentRepository.find({ where: { status: 'A' } });

      return shipments
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findByTrackingNumber(trackingNumber: string) {
    try {
      const shipments = await this.shipmentRepository.find({ where: { trackingNumber, status: 'A' } });

      return shipments
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const shipment = await this.shipmentRepository.findOne({
        where: { id, status: 'A' }
      });

      if (!shipment)
        throw new NotFoundException('Reporte no encontrado')

      return shipment;
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async update(id: string, updateShipmentDto: UpdateShipmentDto) {
    try {
      await this.findOne(id);
      await this.shipmentRepository.update({ id }, updateShipmentDto);

      return 'Reporte actualizado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      await this.shipmentRepository.update({ id }, { status: 'I' });

      return 'Reporte eliminado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }
}
