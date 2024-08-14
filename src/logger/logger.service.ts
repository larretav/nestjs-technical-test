import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ILogs } from 'src/auth/interfaces/log.interface';

@Injectable()
export class LoggerService {

  private logFilePath = path.join(__dirname, '..', '..', 'logs', 'user.log');

  constructor() {}

  getLogsObj(): ILogs[] {
    // console.log(this.logFilePath)
    if (!fs.existsSync(this.logFilePath)) return [];

    const logs = fs.readFileSync(this.logFilePath, 'utf-8');

    const logsArr = logs.split('\n')
    logsArr.pop();

    const logsObj = logsArr.map(log => {
      const [method = '', path = '', user = '', role = '', date = ''] = log.split(' | ');
      return { method, path, user, role, date };
    })

    return logsObj
  }

  getLogsStr(): string {
    // console.log(this.logFilePath)
    if (!fs.existsSync(this.logFilePath)) return '';

    const logs = fs.readFileSync(this.logFilePath, 'utf-8');

    return logs
  }


  findAll(format: number = 1) {
    return format === 1 ? this.getLogsObj() : this.getLogsStr();
  }

  findOne(userName: string, format: number) {
    const logs = this.getLogsObj().filter(log => log.user === userName);

    if (format === 2)
      return logs.map(({ method, path, user, role, date }) => `${method} | ${path} | ${user} | ${role} | ${date}`).join('\n');

    return logs
  }
}
