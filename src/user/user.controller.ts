import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {
  @Get()
  getUsers() {
    return { name: 'Akash', email: 'test@user.com' };
  }

  @Post()
  store(@Req() req: Request) {
    // console.log(req.body);
    return req.body;
  }

  @Patch()
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
