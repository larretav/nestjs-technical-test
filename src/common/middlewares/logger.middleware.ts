import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization.split(' ')?.[1] ?? ''
    const userData = jwtDecode(token);

    console.log(userData)
    // console.log(`${userData?.user}, ${userData.}`)
    console.log(req.baseUrl, req.method, new Date().toISOString());

    next();
  }
}
