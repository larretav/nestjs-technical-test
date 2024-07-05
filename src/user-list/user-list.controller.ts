import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { UserListService } from './user-list.service';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UpdateUserListDto } from './dto/update-user-list.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('user-list')
export class UserListController {
  constructor(private readonly userListService: UserListService) {}

  @Post()
  create(@Body() createUserListDto: CreateUserListDto) {
    return this.userListService.create(createUserListDto);
  }

  @Get()
  findAll() {
    return this.userListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userListService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserListDto: UpdateUserListDto) {
    return this.userListService.update(id, updateUserListDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userListService.remove(id);
  }
}
