import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { compare, hash } from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(user: SignInDto) {

    const { password, userName } = user;

    const findUser = await this.usersService.findOne(userName);

    const checkPassword = await compare(password, findUser.password)

    if (!checkPassword) throw new ForbiddenException('Contraseña incorrecta');

    const payload = {
      user: userName,
      name: `${findUser.firstName} ${findUser.lastName}`.trim(),
      role: findUser.role
    }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
