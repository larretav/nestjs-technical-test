import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) { }

  @Post()
  create(@Body() createShipmentDto: CreateShipmentDto | CreateShipmentDto[]) {
    return this.shipmentsService.create(Array.isArray(createShipmentDto) ? createShipmentDto : [createShipmentDto]);
  }

  @Get()
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shipmentsService.findOne(id);
  }

  @Get('search/:term')
  findByTracking(@Param('term') term: string) {
    return this.shipmentsService.findByTrackingNumber(term);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateShipmentDto: UpdateShipmentDto) {
    return this.shipmentsService.update(id, updateShipmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shipmentsService.remove(id);
  }
}
