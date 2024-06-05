import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('logger')
// @Auth(Role.Admin)
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  
  @Get(':format')
  findAll(@Param('format') format: string) {
    return this.loggerService.findAll(+format);
  }

  @Get('search/:userName/:format')
  findOne(@Param('userName') userName: string, @Param('format') format: string) {
      return this.loggerService.findOne(userName, +format);
  }

}
