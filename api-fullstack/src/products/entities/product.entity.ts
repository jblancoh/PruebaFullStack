import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn()
  productID: number;
  
  @Column()
  name: string;
  
  @Column()
  productNumber: string;
  
  @Column()
  makeFlag: boolean;
  
  @Column()
  finishedGoodsFlag: boolean;
  
  @Column()
  color: string;
  
  @Column()
  safetyStockLevel: number;
  
  @Column()
  reorderPoint: number;
  
  @Column()
  standardCost: number;
  
  @Column()
  listPrice: number;
  
  @Column()
  size: string;
  
  @Column()
  sizeUnitMeasureCode: string;
  
  @Column()
  weightUnitMeasureCode: string;
  
  @Column({ nullable: true })
  weight: number;
  
  @Column()
  daysToManufacture: number;
  
  @Column()
  productLine: string;
  
  @Column()
  class: string;
  
  @Column()
  style: string;
  
  @Column({ nullable: true })
  productSubcategoryID: number;
  
  @Column({ nullable: true })
  productModelID: number;
  
  @Column({ nullable: true })
  sellStartDate: Date;
  
  @Column({ nullable: true})
  sellEndDate: Date;
  
  @Column({ nullable: true})
  discontinuedDate: Date;
  
  @Column()
  rowguid: string;
  
  @Column()
  modifiedDate: Date;
}