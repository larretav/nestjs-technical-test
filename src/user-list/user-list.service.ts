import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UpdateUserListDto } from './dto/update-user-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserList } from './entities/user-list.entity';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';

@Injectable()
export class UserListService {

  constructor(
    @InjectRepository(UserList)
    private readonly userListRepository: Repository<UserList>,
  ) { }

  async create(createUserListDto: CreateUserListDto) {
    try {
      const newUser = this.userListRepository.create({ ...createUserListDto });
      await this.userListRepository.save(newUser);

      return 'Registrado correctamente';
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const users = await this.userListRepository.find({ where: { status: 'A' } });
      return users
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userListRepository.findOne({
        where: { id, status: 'A' }
      });

      if (!user)
        throw new NotFoundException('Usuario no encontrado')

      return user
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async update(id: string, updateUserListDto: UpdateUserListDto) {
    try {

      await this.findOne(id);

      await this.userListRepository.update({ id }, updateUserListDto);

      return 'Usuario actualizado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.findOne(id);

      await this.userListRepository.update({ id: user.id }, { status: 'I' });

      return 'Usuario eliminado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }
}
