import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contacts.entity';
import { Repository } from 'typeorm';


import { isNumber, isUUID } from 'class-validator';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';
import { ContactAddresses } from './entities/contact-addresses.entity';
import { ContactPhones } from './entities/contact-phones.entity';

@Injectable()
export class ContactsService {

  constructor(

    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,

    @InjectRepository(ContactAddresses)
    private readonly contactAddressesRepository: Repository<ContactAddresses>,

    @InjectRepository(ContactPhones)
    private readonly contactPhoneRepository: Repository<ContactPhones>,

  ) { }

  async create(createContactDto: CreateContactDto) {
    try {
      const { addresses = [], phones = [], ...restContact } = createContactDto;
      const contact = this.contactsRepository.create({
        ...restContact,
        addresses: addresses.map(address => this.contactAddressesRepository.create(address)),
        phones: phones.map(phone => this.contactPhoneRepository.create(phone))
      });

      await this.contactsRepository.save(contact)

      return 'Contacto registrado correctamente';
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const contacts = await this.contactsRepository.find();
      return contacts
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findOne(id: string) {

    try {
      const user = await this.contactsRepository.findOne({
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

  async findByTerm(term: string) {
    try {
      const user = await this.findContactByTerm(term)

      if (!user)
        throw new NotFoundException('Usuario no encontrado')

      return user
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }



  async findContactByTerm(term: string) {

    try {

      let contacts: Contact[];

      if (!term) return await this.contactsRepository.find();

      if (isUUID(term))
        contacts = await this.contactsRepository.find({
          where: { id: term, status: 'A' }
        });

      if (isNumber(term))
        contacts = await this.contactsRepository.createQueryBuilder('contacts')
          .innerJoin('contacts.phones', 'phones')
          .where('phones.phoneNumber = :phoneNumber', { term })
          .getMany();

      if (contacts == null)
        contacts = await this.contactsRepository
          .createQueryBuilder('contacts')
          .where('contacts.name LIKE %:name% OR contacts.lastName LIKE %:lastName%', { name, lastName: term })
          .getMany();

      return contacts;
    } catch (error) {
      throw error
    }
  }
}
