import { PartialType } from '@nestjs/swagger';
import { CreateIneDto } from './create-ine.dto';

export class UpdateIneDto extends PartialType(CreateIneDto) {}
