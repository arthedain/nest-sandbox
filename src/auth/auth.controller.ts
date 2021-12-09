import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationDto } from './dto/registration.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  public register(@Body() registrationDto: RegistrationDto) {
    return this.authService.register(registrationDto);
  }

  @Post('/login')
  public login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
