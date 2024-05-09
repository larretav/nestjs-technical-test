import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Contact } from 'src/contacts/entities/contacts.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      User, 
      Contact
    ])
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
