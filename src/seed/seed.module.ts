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

@Module({
  controllers: [SeedController],
  providers: [
    SeedService],
  imports: [
    ContactsModule,
    UsersModule,
    TypeOrmModule.forFeature([
      Contact,
      ContactAddresses,
      ContactPhones,

      User,
    ])
  ],
  exports: [
    SeedService
  ]
})
export class SeedModule { }
