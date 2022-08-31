import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentPatientId = createParamDecorator(
  (data: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    return request.user['sub'];
  },
);
