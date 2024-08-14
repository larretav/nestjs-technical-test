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

  @Column('text', { name: 'problem-description' })
  problemDescription: string

  @Column('text', { name: 'solution-description' })
  solutionDescription: string

  @Column('text', { name: 'support-state' })
  supportState: string; //'en progreso' // 'pendiente' | 'cancelado' | 'completado',

  @Column('text', { name: 'track-number' })
  trackNumber: string;

  @Column('timestamp', { name: 'shipment-date' })
  shipmentDate: Date;

  @Column('text', { name: 'branch-office' })
  branchOffice: string;

  @Column('text', { name: 'shipment-origin' })
  shipmentOrigin: string;

  @Column('text', { name: 'shipment-destination' })
  shipmentDestination: string;

  @Column('text', { name: 'shipment-state' })
  state: string;//'en sitio' // 'en transito' | 'entregado' | 'cancelado',

}
