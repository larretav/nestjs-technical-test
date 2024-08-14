import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";


@Entity({ name: 'support-reports' })
export class SupportReport extends BaseEntity {

  @Column('text')
  type: string;

  @Column('text')
  user: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column('text', { name: 'problem-description', nullable: true })
  problemDescription: string

  @Column('text', { name: 'solution-description', nullable: true })
  solutionDescription: string

  @Column('text', { name: 'support-state' })
  supportState: string;

  @Column('text', { name: 'track-number', nullable: true })
  trackNumber: string;

  @Column('timestamp', { name: 'shipment-date', nullable: true })
  shipmentDate: Date;

  @Column('text', { name: 'branch-office', nullable: true })
  branchOffice: string;

  @Column('text', { name: 'shipment-origin', nullable: true })
  shipmentOrigin: string;

  @Column('text', { name: 'shipment-destination', nullable: true })
  shipmentDestination: string;

  @Column('text', { name: 'shipment-state', nullable: true })
  shipmentState: string;

  @Column('char', { default: 'A', select: false })
  status: string;

}
