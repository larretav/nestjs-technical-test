import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'user-list' })
export class UserList extends BaseEntity {
  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('boolean')
  isPaid: boolean;
  
  @Column('boolean')
  isConfirmed: boolean;

  @Column('char', { default: 'A', select: false })
  status: string;

}
