import { Module } from '@nestjs/common';
import { IneService } from './ine.service';
import { IneController } from './ine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ine } from './entities/ine.entity';
import { States } from './entities/states.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ine,
      States
    ])
  ],
  controllers: [IneController],
  providers: [IneService],
})
export class IneModule {}
