import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeedService } from './seed.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('seed')
@Roles(Role.Admin)
@UseGuards(JwtAuthGuard, RolesGuard)
export class SeedController {
  constructor(
    private readonly seedService: SeedService
  ) { }

  @Get()
  executeSeed() {
    return this.seedService.runSeed();
  }
}
