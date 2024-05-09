import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';
import { ContactsService } from 'src/contacts/contacts.service';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { Repository } from 'typeorm';
import { contactsTestData } from './data/contacts-data';
import { UsersService } from 'src/users/users.service';
import { usersDataTest } from './data/users-data';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SeedService {

  constructor(
    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly contactsService: ContactsService,
    private readonly usersService: UsersService,

  ) { }


  async runSeed() {

    try {
      this.contactsRepository.delete({});
      this.usersRepository.delete({});

      // await this.intertContacts();
      await this.intertUsers();

      return 'Seed excecuted';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  private async intertContacts() {
    try {
      const contactsPromises = contactsTestData.map(contact => {
        return this.contactsService.create(contact)
      });

      await Promise.all(contactsPromises)
    } catch (error) {
      throw error;
    }
  }

  private async intertUsers() {
    try {
      const userPromises = usersDataTest.map(user => {
        user.contacts = this.getRandomElements(contactsTestData, 15);
        return this.usersService.create(user)
      });

      await Promise.all(userPromises)
    } catch (error) {
      throw error;
    }
  }

  private getRandomElements(arreglo: any[], cantidad: number) {
    // Función de comparación aleatoria para sort()
    const randomCompare = () => Math.random() - 0.5;

    // Copia el arreglo y lo ordena aleatoriamente
    const randomArray = arreglo.slice().sort(randomCompare);

    // Toma los primeros "cantidad" elementos del arreglo aleatorio
    const randomItems = randomArray.slice(0, cantidad);

    return randomItems;
}

  private getRandomInt(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
