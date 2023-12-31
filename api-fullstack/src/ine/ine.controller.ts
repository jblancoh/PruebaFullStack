import { Controller, Get,Param } from '@nestjs/common';
import { IneService } from './ine.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Auth([Role.Admin, Role.User])
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
