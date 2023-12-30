import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }
    
    const isPasswordValid = bcryptjs.compareSync(loginDto.password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }
    
    const payload = { email: user.email, role: user.role }
    const token = this.jwtService.sign(payload)
    return { token, email: user.email, role: user.role }
  }

  async signup(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.findOneByEmail(registerUserDto.email)
    if (user) {
      throw new BadRequestException('User already exists')
    }
    const password = await bcryptjs.hash(registerUserDto.password, 10)
    registerUserDto.password = password
    
    return await this.usersService.create(registerUserDto)
  }
}
