// import { createParamDecorator } from "@nestjs/common";
// import { User } from "src/entities/user.entity";

// export const GetUser = createParamDecorator((data, req): User=> {
//     return req.user;
// });

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);