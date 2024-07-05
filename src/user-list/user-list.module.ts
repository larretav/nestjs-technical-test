import { Module } from '@nestjs/common';
import { UserListService } from './user-list.service';
import { UserListController } from './user-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserList } from './entities/user-list.entity';

@Module({
  controllers: [UserListController],
  providers: [UserListService],
  imports: [
    TypeOrmModule.forFeature([
      UserList,
    ])
  ],
})
export class UserListModule { }
