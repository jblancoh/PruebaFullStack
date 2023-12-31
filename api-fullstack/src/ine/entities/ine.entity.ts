import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { States } from './states.entity';

@Entity()
export class Ine {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => States, (state) => state.cve)
  state: States;
  
  @ManyToOne(() => States, (state) => state.cveDistrict)
  district: States;
  
  @Column()
  native: boolean;
  
  @Column()
  population: number;
  
  @Column()
  populationFemale: number;
  
  @Column()
  populationMale: number;

}