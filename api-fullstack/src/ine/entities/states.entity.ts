import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class States {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  cve: number;
  
  @Column()
  state: string;
  
  @Column()
  cveDistrict: number;
  
  @Column()
  district: string;
}