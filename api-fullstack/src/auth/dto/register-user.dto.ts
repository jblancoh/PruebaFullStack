import { IsString, IsEmail, MinLength, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterUserDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  name?: string;
  
  @IsEmail()
  email: string;
  
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(8)
  password: string;
  
  @IsDate()
  createdAt: Date;
  
  @IsString()
  role: string;
}