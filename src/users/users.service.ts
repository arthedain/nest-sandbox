import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from '../roles/roles.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const password = await bcrypt.hash(userDto.password, 5);

    const role = await this.roleRepository.findOne(userDto.roleId);

    return await this.userRepository.save({
      name: userDto.name,
      email: userDto.email,
      role,
      password,
    });
  }

  public async all(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
