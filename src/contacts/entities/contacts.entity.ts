import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ContactAddresses } from "./contact-addresses.entity";
import { ContactPhones } from "./contact-phones.entity";

@Entity({ name: 'contacts' })
export class Contact extends BaseEntity {

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('text')
  email: string;

  @Column('char', { default: 'A', select: false })
  status: string;

  @OneToMany(
    (type) => ContactAddresses,
    (contactAddresses) => contactAddresses.contact,
    { eager: true, cascade: true }
  )
  addresses?: ContactAddresses[];


  @OneToMany(
    (type) => ContactPhones,
    (contactPhones) => contactPhones.contact,
    { eager: true, cascade: true }
  )
  phones?: ContactPhones[];

}




const body = {
  name: '',
  lastName: '',
  email: '',
  addresses: [
    {
      type: '',
      street: '',
      number: '',
      suburb: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    }
  ],
  phones: [
    {
      type: '',
      phoneNumber: '',
    }
  ],
}