import { BaseEntity } from "src/common/entities/base.entity";
import { Contact } from "src/contacts/entities/contacts.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'users' })
export class User extends BaseEntity {

  @Column('varchar', { name: 'first_name', length: 100 })
  firstName: string;

  @Column('varchar', { name: 'last_name', length: 100 })
  lastName: string;

  @Column('varchar', { length: 50 })
  email: string;

  @Column('varchar', { length: 45, unique: true })
  userName: string;

  @Column('varchar', { length: 100 })
  password: string;

  @Column('varchar', { length: 50, default: 'user' })
  role: string;

  @Column('char', { default: 'A' })
  status: string;

  @OneToMany(
    (type) => Contact,
    (contact) => contact.user,
    { eager: true, cascade: true }
  )
  contacts?: Contact[];
}
