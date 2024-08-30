import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'shipments' })
export class Shipment extends BaseEntity {
  @Column('text', { name: 'tracking-number', nullable: false })
  trackingNumber: string;

  @Column('text', { name: 'user-name', nullable: false })
  userName: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column('text', { name: 'branch-office', nullable: false })
  branchOffice: string;

  @Column('text', { nullable: false })
  origin: string;

  @Column('text', { nullable: false })
  destination: string;

  @Column('text', { name: 'shipment-status', nullable: false })
  shipmentStatus: string;

  @Column('char', { default: 'A', select: false })
  status: string;
}
