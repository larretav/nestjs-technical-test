import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtDecode } from 'jwt-decode';

import { JwtUser } from 'src/auth/interfaces/jwt-user.interface';

import * as fs from 'fs';
import * as path from 'path';
import * as dayjs from 'dayjs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization.split(' ')?.[1] ?? ''
      const userData = jwtDecode<JwtUser>(token);

      const date = dayjs().format('YYYY-MM-DD HH:mm:ss')

      const log = `${req.method} | ${req.baseUrl}${req.url} | ${userData.user} | ${userData.role} | ${date}\n`;
      const logDir = path.join(__dirname, '..', '..', '..', 'logs');
      const logFilePath = path.join(logDir, 'user.log');

      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
      }

      fs.appendFileSync(logFilePath, log);
    } catch (error) {
      console.log(`Token no válido: ${req.baseUrl}${req.url}`)
    }

    next();
  }
}
