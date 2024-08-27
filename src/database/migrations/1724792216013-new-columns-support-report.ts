import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class NewColumnsSupportReport1724792216013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('support-reports', [

            new TableColumn({ type: 'text', name: 'priority', default: `'baja'`, }),

            new TableColumn({ type: 'text', name: 'region', isNullable: true }),

            new TableColumn({ type: 'text', name: 'project-name', isNullable: true }),

            new TableColumn({ type: 'text', name: 'plugin', isNullable: true }),

            new TableColumn({ type: 'text', name: 'requester-customer', isNullable: true }),

        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('support-reports', [
            'priority',
            'region',
            'project-name',
            'plugin',
            'requester-customer',
        ]);
    }

}



