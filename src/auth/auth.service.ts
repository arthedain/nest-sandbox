import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { RegistrationDto } from './dto/registration.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  public async register(registrationDto: RegistrationDto): Promise<User> {
    const existedUser = await this.userRepository.findOne({
      email: registrationDto.email,
    });
    if (existedUser) {
      throw new NotAcceptableException();
    }

    const password = await bcrypt.hash(registrationDto.password, 5);
    const user = await this.userRepository.save({
      ...registrationDto,
      password,
    });
    return user;
  }

  public async login(loginDto: LoginDto): Promise<object> {
    const user = await this.checkUser(loginDto);
    return this.generateToken(user);
  }

  private async checkUser(loginDto: LoginDto): Promise<User> {
    const user = await this.userRepository.findOne({
      email: loginDto.email,
    });
    const password = await bcrypt.compare(loginDto.password, user.password);
    if (user && password) {
      return user;
    }
    throw new UnauthorizedException();
  }

  private async generateToken(user: User): Promise<object> {
    const payload = { email: user.email, name: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
