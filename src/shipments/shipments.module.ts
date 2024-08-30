import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsController } from './shipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment.entity';

@Module({
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
  imports: [
    TypeOrmModule.forFeature([
      Shipment,
    ])
  ],
  exports: [
    ShipmentsService
  ]
})
export class ShipmentsModule { }
