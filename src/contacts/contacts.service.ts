import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contacts.entity';
import { DataSource, Not, Repository } from 'typeorm';


import { isNumber, isUUID } from 'class-validator';
import { HandleExceptions } from 'src/common/exceptions/handleExceptions';
import { ContactAddresses } from './entities/contact-addresses.entity';
import { ContactPhones } from './entities/contact-phones.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ContactsService {

  constructor(

    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,

    @InjectRepository(ContactAddresses)
    private readonly contactAddressesRepository: Repository<ContactAddresses>,

    @InjectRepository(ContactPhones)
    private readonly contactPhoneRepository: Repository<ContactPhones>,

    private readonly dataSource: DataSource,
    private readonly usersService: UsersService,

  ) { }

  async create(createContactDto: CreateContactDto, userId: string) {
    try {
      const { addresses = [], phones = [], ...restContact } = createContactDto;
      const contact = this.contactsRepository.create({
        ...restContact,
        addresses: addresses.map(address => this.contactAddressesRepository.create(address)),
        phones: phones.map(phone => this.contactPhoneRepository.create(phone)),
        user: await this.usersService.findOne(userId)
      });

      const resp = await this.contactsRepository.save(contact)
      return resp
      // return 'Contacto registrado correctamente';
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findAll(userId: string) {
    try {
      const contacts = await this.contactsRepository.find({ where: { status: 'A', user: { id: userId } } });
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

  async findByTerm(term: string, userId: string) {
    try {
      const user = await this.findContactByTerm(term, userId)

      if (!user)
        throw new NotFoundException('Usuario no encontrado')

      return user
    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async update(id: string, updateContactDto: UpdateContactDto) {

    const { addresses = [], phones = [], ...restContact } = updateContactDto;

    const contact = await this.contactsRepository.preload({ id, ...updateContactDto });

    if (!contact)
      throw new NotFoundException(`El contacto con el id: "${id}" no se encontró`);

    // Create query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (addresses) {
        await queryRunner.manager.delete(ContactAddresses, { contact: { id } });
        contact.addresses = addresses.map(address => this.contactAddressesRepository.create(address));
      }

      if (phones) {
        await queryRunner.manager.delete(ContactPhones, { contact: { id } });
        contact.phones = phones.map(phones => this.contactPhoneRepository.create(phones))
      }

      await queryRunner.manager.save(contact);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return contact;

    } catch (error) {

      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async remove(id: string, user: string) {
    try {

      await this.findOne(id);

      await this.contactsRepository.update({ id }, { status: 'I' });

      const contacts = await this.findAll(user);

      if (contacts.length === 0)
        this.contactsRepository.update({ id: Not(id) }, { status: 'A' })

      return 'Contacto eliminado correctamente';

    } catch (error) {
      const exception = new HandleExceptions();
      exception.handleExceptions(error);
    }
  }

  async findContactByTerm(term: string, userId: string) {
    try {

      let contacts: Contact[];

      if (!term) return await this.contactsRepository.find();

      if (isUUID(term))
        contacts = await this.contactsRepository.find({
          where: { id: term, status: 'A' }
        });

      if (isNumber(+term))
        contacts = await this.contactsRepository.createQueryBuilder('contacts')
          .innerJoinAndSelect('contacts.phones', 'phones')
          .innerJoinAndSelect('contacts.addresses', 'addresses')
          .where("contacts.userId = :userId", { userId: userId })
          .andWhere('phones.phoneNumber = :phoneNumber', { phoneNumber: term })
          .getMany();

      term = term.toLocaleLowerCase().trim();

      if (contacts == null)
        contacts = await this.contactsRepository
          .createQueryBuilder('contacts')
          .innerJoinAndSelect('contacts.phones', 'phones')
          .innerJoinAndSelect('contacts.addresses', 'addresses')
          .where("contacts.userId = :userId", { userId: userId })
          .andWhere(
            "LOWER(contacts.name) LIKE :name OR LOWER(contacts.lastName) LIKE :lastName",
            { name: `%${term}%`, lastName: `%${term}%` }
          )
          .getMany();

      return contacts;
    } catch (error) {
      throw error
    }
  }
}
