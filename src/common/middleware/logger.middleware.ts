import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtDecode } from 'jwt-decode';

import { JwtUser } from 'src/auth/interfaces/jwt-user.interface';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization.split(' ')?.[1] ?? ''
    const userData = jwtDecode<JwtUser>(token);

    const log = `${req.method} | ${req.baseUrl} | ${userData.user} | ${userData.role} | ${new Date().toISOString()}\n`;
    const logDir = path.join(__dirname, '..', '..', '..', 'logs');
    const logFilePath = path.join(logDir, 'user.log');
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    console.log('middleware', logFilePath)
    fs.appendFileSync(logFilePath, log);

    next();
  }
}
