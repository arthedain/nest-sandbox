import { Body, Controller, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto } from './dto/role.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('/create')
  public create(@Body() roleDto: RoleDto) {
    return this.rolesService.create(roleDto);
  }
}
