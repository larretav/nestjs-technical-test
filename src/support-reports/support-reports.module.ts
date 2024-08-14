import { Module } from '@nestjs/common';
import { SupportReportsService } from './support-reports.service';
import { SupportReportsController } from './support-reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportReport } from './entities/support-report.entity';

@Module({
  controllers: [SupportReportsController],
  providers: [SupportReportsService],
  imports: [
    TypeOrmModule.forFeature([
      SupportReport,
    ])
  ],
})
export class SupportReportsModule {}
