import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmploymentByLocation {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  idState: number;
  
  @Column()
  state: string;
  
  @Column()
  year: number;
  
  @Column({ nullable: true })
  industrySector: string;
  
  @Column({ nullable: true })
  workforceStatus: boolean;
  
  @Column()
  totalPopulation: number;
  
  @Column({ nullable: true })
  slugState: string;
  
}
