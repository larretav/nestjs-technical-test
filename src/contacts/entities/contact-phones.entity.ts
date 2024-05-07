import {  Column, Entity, ManyToOne } from "typeorm";
import { Contact } from "./contacts.entity";
import { BaseEntity } from "src/common/entities/base.entity";


@Entity({ name: 'contact-phones' })
export class ContactPhones extends BaseEntity {

  @Column('text')
  type: string;

  @Column('text')
  phoneNumber: string;


  @ManyToOne(
    (type) => Contact,
    (contact) => contact.phones,
    { onDelete: 'CASCADE' }
  )
  contact: Contact
}
