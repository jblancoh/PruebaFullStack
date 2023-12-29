import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  
  @Post('login')
  login() {
    return this.authService.login()
  }
  
  @Post('signup')
  signup(
    @Body()
    registerUserDto: RegisterUserDto 
  ) {
    return this.authService.signup(registerUserDto)
  }
}
