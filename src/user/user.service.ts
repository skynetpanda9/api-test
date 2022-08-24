import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return { name: 'New Akash', email: 'newuser@test.com' };
  }

  create(body: any) {
    return body;
  }

  update(
    updateUserDto: { name: string; email: string },
    param: { userId: number },
  ) {
    return { body: updateUserDto, param };
  }

  show(param: { userId: number }) {
    return param;
  }

  delete(param: { userId: number }) {
    return param;
  }
}
