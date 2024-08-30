import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddShipmentsTable1724999119507 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shipments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'tracking-number',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'user-name',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'branch-office',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'origin',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'destination',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'shipment-status',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'char',
                        default: "'A'",
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP',
                        isNullable: false,
                    },
                ],
            }),
            true
        ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('shipments');
    }

}
