import { Injectable } from '@nestjs/common';
import { CreateIneDto } from './dto/create-ine.dto';
import { UpdateIneDto } from './dto/update-ine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ine } from './entities/ine.entity';
import { States } from './entities/states.entity';

@Injectable()
export class IneService {
  
  constructor(
    @InjectRepository(Ine)
    private ineRepository: Repository<Ine>,
    @InjectRepository(States)
    private statesRepository: Repository<States>
  ) {}

  findAll() {
    return this.ineRepository.find();
  }

  findOne(state: number) {
    const options = { relations: ["state", "district"], where: { state: { cve: state } } };
    return this.ineRepository.findOne(options);
  }
  
  findAllStates() {
    return this.statesRepository.find();
  }
}
