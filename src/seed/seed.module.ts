import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { ContactAddresses } from 'src/contacts/entities/contact-addresses.entity';
import { ContactPhones } from 'src/contacts/entities/contact-phones.entity';
import { ContactsModule } from 'src/contacts/contacts.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ContactsModule,
    TypeOrmModule.forFeature([
      Contact,
      ContactAddresses,
      ContactPhones
  ])    
  ]
})
export class SeedModule {}
