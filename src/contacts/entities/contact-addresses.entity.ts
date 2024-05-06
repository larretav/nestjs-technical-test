import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity({ name: 'contact-addresses' })
export class ContactAddresses extends BaseEntity {

  @Column('text')
  type: string;

  @Column('text')
  street: string;

  @Column('text')
  number: string;

  @Column('text', { nullable: true })
  suburb?: string;

  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('text')
  postalCode: string;

  @Column('text')
  country: string;


  @ManyToOne(
    () => Contacts,
    (contact) => contact.addresses,
    { onDelete: 'CASCADE' }
  )
  contact: Contacts;
}
