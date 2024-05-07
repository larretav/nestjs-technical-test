import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contacts.entity';
import { ContactPhones } from './entities/contact-phones.entity';
import { ContactAddresses } from './entities/contact-addresses.entity';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [
    TypeOrmModule.forFeature([
      Contact,
      ContactPhones,
      ContactAddresses
    ])
  ],
})
export class ContactsModule {}
