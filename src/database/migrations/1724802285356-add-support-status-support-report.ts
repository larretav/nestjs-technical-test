import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddSupportStatusSupportReport1724802285356 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('support-reports', new TableColumn({ name: 'support-status', type: 'text', isNullable: true }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('support-reports', 'support-status');
    }

}
