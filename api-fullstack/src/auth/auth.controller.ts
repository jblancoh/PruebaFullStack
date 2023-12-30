import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request as Req } from 'express';

interface RequestWithUser extends Req {
  user: any;
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
  @UseGuards(AuthGuard)
  profile(
    @Request()
    request: RequestWithUser
  ) {
    return request.user
  }
}
