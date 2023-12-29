import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly usersService: UsersService
  ) {}
  
  login() {
    return 'This action logs a user in';
  }

  async signup(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.findOneByEmail(registerUserDto.email)
    if (user) {
      throw new BadRequestException('User already exists')
    }
    
    return await this.usersService.create(registerUserDto)
  }
}
