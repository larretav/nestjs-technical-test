import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { UserListService } from './user-list.service';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UpdateUserListDto } from './dto/update-user-list.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

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
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserListDto: UpdateUserListDto) {
    return this.userListService.update(id, updateUserListDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userListService.remove(id);
  }
}
