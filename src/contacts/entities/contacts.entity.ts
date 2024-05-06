import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ContactAddresses } from "./contact-addresses.entity";
import { ContactPhones } from "./contact-phones.entity";

@Entity({ name: 'contacts' })
export class Contacts extends BaseEntity {

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('text')
  email: string;

  @Column('char', { default: 'A' })
  status: string;

  @OneToMany(
    (type) => ContactAddresses,
    (contactAddresses) => contactAddresses.contact,
  )
  addresses: ContactAddresses[];


  @OneToMany(
    (type) => ContactPhones,
    (contactPhones) => contactPhones.contact,
  )
  phones: ContactAddresses[];

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