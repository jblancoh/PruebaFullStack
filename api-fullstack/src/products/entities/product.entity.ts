import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Product {
  @PrimaryColumn()
  ProductID: number;
  
  @Column()
  Name: string;
  
  @Column()
  ProductNumber: string;
  
  @Column()
  MakeFlag: boolean;
  
  @Column()
  FinishedGoodsFlag: boolean;
  
  @Column()
  Color: string;
  
  @Column()
  SafetyStockLevel: number;
  
  @Column()
  ReorderPoint: number;
  
  @Column()
  StandardCost: number;
  
  @Column()
  ListPrice: number;
  
  @Column()
  Size: string;
  
  @Column()
  SizeUnitMeasureCode: string;
  
  @Column()
  WeightUnitMeasureCode: string;
  
  @Column({ nullable: true })
  Weight: number;
  
  @Column()
  DaysToManufacture: number;
  
  @Column()
  ProductLine: string;
  
  @Column()
  Class: string;
  
  @Column()
  Style: string;
  
  @Column({ nullable: true })
  ProductSubcategoryID: number;
  
  @Column({ nullable: true })
  ProductModelID: number;
  
  @Column({ nullable: true })
  SellStartDate: Date;
  
  @Column({ nullable: true})
  SellEndDate: Date;
  
  @Column({ nullable: true})
  DiscontinuedDate: Date;
  
  @Column()
  rowguid: string;
  
  @Column()
  ModifiedDate: Date;
}