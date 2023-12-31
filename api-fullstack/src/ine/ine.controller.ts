import { Controller, Get,Param } from '@nestjs/common';
import { IneService } from './ine.service';


@Controller('ine')
export class IneController {
  constructor(private readonly ineService: IneService) {}

  @Get()
  findAll() {
    return this.ineService.findAll();
  }
  
  @Get('states')
  findAllStates() {
    return this.ineService.findAllStates();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ineService.findOne(+id);
  }

}
