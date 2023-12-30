import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true, nullable: false })
    email: string;
    
    @Column({ nullable: false })
    password: string;
    
    @Column()
    name: string;
    
    @Column({ default: 'user' })
    role: string;
    
    @Column()
    createdAt: Date;
    
    @Column({ nullable: true })
    updatedAt: Date;
    
    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
}
