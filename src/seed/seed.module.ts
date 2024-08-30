import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { ContactAddresses } from 'src/contacts/entities/contact-addresses.entity';
import { ContactPhones } from 'src/contacts/entities/contact-phones.entity';
import { ContactsModule } from 'src/contacts/contacts.module';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
import { SupportReportsModule } from 'src/support-reports/support-reports.module';
import { SupportReport } from 'src/support-reports/entities/support-report.entity';
import { ShipmentsModule } from 'src/shipments/shipments.module';
import { Shipment } from 'src/shipments/entities/shipment.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ContactsModule,
    UsersModule,
    SupportReportsModule,
    ShipmentsModule,
    TypeOrmModule.forFeature([
      Contact,
      ContactAddresses,
      ContactPhones,
      User,
      SupportReport,
      Shipment
    ])
  ],
  exports: [
    SeedService
  ]
})
export class SeedModule { }
