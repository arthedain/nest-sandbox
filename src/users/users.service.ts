import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userRepository.save({
      ...userDto,
      password: hashPassword,
    });
    return user;
  }

  public async all(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
