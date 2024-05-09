import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';
import { ContactsService } from 'src/contacts/contacts.service';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { Repository } from 'typeorm';
import { contactsTestData } from './data/contacts-data';

@Injectable()
export class SeedService {

  constructor(
    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,

    private readonly contactsService: ContactsService
  ) { }


  async runSeed() {

    try {
      this.contactsRepository.delete({});

      await this.intertContacts();

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
}
