import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';
import { ContactsService } from 'src/contacts/contacts.service';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { Repository } from 'typeorm';
import { contactsTestData } from './data/contacts-data';
import { UsersService } from 'src/users/users.service';
import { usersDataTest } from './data/users-data';
import { User } from 'src/users/entities/user.entity';
import { AdminCredentials } from './interfaces/admin-cred.interface';
import { SupportReportsService } from 'src/support-reports/support-reports.service';
import { SupportReport } from 'src/support-reports/entities/support-report.entity';
import { supportReportsTestData } from './data/support-reports';

@Injectable()
export class SeedService {

  constructor(
    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    
    @InjectRepository(SupportReport)
    private readonly supportReportsRepository: Repository<SupportReport>,

    private readonly contactsService: ContactsService,
    private readonly usersService: UsersService,
    private readonly supportReportsService: SupportReportsService,

  ) { }


  async createAdminUser(credentials: AdminCredentials) {
    const { userName, password } = credentials;

    if (userName !== 'larretav' || password !== '123Tamarindo')
      throw new UnauthorizedException('Usuario no autorizado');

    try {
      await this.usersService.create({
        firstName: "admin",
        lastName: "admin",
        email: "admin@gmail.com",
        userName: "admin",
        password: "123Tamarindo",
        role: "admin",
        contacts: []
      })

      return 'Usuario Admin creado'
    } catch (error) {
      throw error;
    }
  }


  async runSeed() {

    try {
      this.contactsRepository.delete({});
      this.usersRepository.delete({});
      this.usersRepository.delete({});
      this.supportReportsRepository.delete({});

      // await this.intertContacts(); // Se insertan con los usuarios
      await this.intertUsers();
      await this.intertSuportReports();

      return 'Seed excecuted';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  private async intertContacts() {
    try {
      const contactsPromises = contactsTestData.map(contact => {
        return this.contactsRepository.create(contact)
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

  private async intertSuportReports() {
    try {
      const suportReportsPromises = supportReportsTestData.map(support => {
        return this.supportReportsService.create(support)
      });

      await Promise.all(suportReportsPromises)
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

}
