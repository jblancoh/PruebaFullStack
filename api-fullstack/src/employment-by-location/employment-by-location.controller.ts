import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmploymentByLocationService } from './employment-by-location.service';

@Controller('employment-by-location')
export class EmploymentByLocationController {
  constructor(private readonly employmentByLocationService: EmploymentByLocationService) {}

  @Get()
  findAll() {
    return this.employmentByLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employmentByLocationService.findOne(+id);
  }
}
