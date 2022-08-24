import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  //   private userService;
  //   constructor() {
  //     this.userService = new UserService();
  //   }
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: { name: string; email: string },
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDto, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.show(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
