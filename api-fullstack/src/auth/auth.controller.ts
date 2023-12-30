import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login.dto';
import { Request as Req } from 'express';
import { Role } from './enums/role.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Req {
  user: {
    email: string,
    role: string,
  }
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto
  ) {
    return this.authService.login(loginDto)
  }
  
  @Post('signup')
  signup(
    @Body()
    registerUserDto: RegisterUserDto 
  ) {
    return this.authService.signup(registerUserDto)
  }
  
  @Get('profile')
  @Auth([Role.Admin, Role.User])
  profile(
    @Request()
    request: RequestWithUser
  ) {
    return this.authService.profile({
      email: request.user.email,
      role: request.user.role,
    })
  }
}
