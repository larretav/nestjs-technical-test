import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPrioritySupportReport1724741923474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("support-reports", new TableColumn({
            name: 'priority',
            type: 'text',
            isNullable: true,
            default: 'baja'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('support-reports', 'priority');
    }

}
