import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  public create(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  @Get('/all')
  public all() {
    return this.usersService.all();
  }
}
