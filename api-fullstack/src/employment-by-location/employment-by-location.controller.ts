import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmploymentByLocationService } from './employment-by-location.service';

@Controller('employment-by-location')
export class EmploymentByLocationController {
  constructor(private readonly employmentByLocationService: EmploymentByLocationService) {}

  @Get()
  findAll(
    @Query('top') top: string,
    @Query('year') year: string,
  ) {
    const yearNumber = year === 'all' ? null : parseInt(year);
    return this.employmentByLocationService.findAll(
      top,
      yearNumber,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employmentByLocationService.findOne(+id);
  }
}
