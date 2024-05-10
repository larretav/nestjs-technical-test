import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeedService } from './seed.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AdminCredentials } from './interfaces/admin-cred.interface';

@Controller('seed')
@Roles(Role.Admin)

export class SeedController {
  constructor(
    private readonly seedService: SeedService,
    private readonly usersService: UsersService
  ) { }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  executeSeed() {
    return this.seedService.runSeed();
  }


  @Post('create-user-admin')
  createAdmin(@Body() credentials: AdminCredentials) {
    return this.seedService.createAdminUser(credentials);
  }

}
