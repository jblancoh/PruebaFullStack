import { Module } from '@nestjs/common';
import { EmploymentByLocationService } from './employment-by-location.service';
import { EmploymentByLocationController } from './employment-by-location.controller';
import { EmploymentByLocation } from './entities/employment-by-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmploymentByLocation])
  ],
  controllers: [EmploymentByLocationController],
  providers: [EmploymentByLocationService],
})
export class EmploymentByLocationModule {}
