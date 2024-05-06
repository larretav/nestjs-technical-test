import {  Column, Entity, ManyToOne } from "typeorm";
import { Contacts } from "./contacts.entity";
import { BaseEntity } from "src/common/entities/base.entity";


@Entity({ name: 'contact-phones' })
export class ContactPhones extends BaseEntity {

  @Column('text')
  type: string;

  @Column('text')
  phoneNumber: string;


  @ManyToOne(
    (type) => Contacts,
    (contact) => contact.phones,
    { onDelete: 'CASCADE' }
  )
  contact: Contacts
}
