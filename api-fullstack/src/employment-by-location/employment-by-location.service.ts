import { Injectable } from '@nestjs/common';
import { EmploymentByLocation } from './entities/employment-by-location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmploymentByLocationService {
  
  constructor(
    @InjectRepository(EmploymentByLocation)
    private employmentByLocationRepository: Repository<EmploymentByLocation>,
  ) {}

  findAll(
    top: string,
    year: number,
  ) {
    const options = { order: { totalPopulation: "DESC" as "DESC" }, where: { year }, take: parseInt(top)};
    return this.employmentByLocationRepository.find(options)
  }

  findOne(id: number) {
    const options = { where: { id } };
    return this.employmentByLocationRepository.findOne(options);
  }
}
