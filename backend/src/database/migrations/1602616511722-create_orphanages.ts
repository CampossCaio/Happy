import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createOrphanages1602616511722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // quantidade de números depois da virgula
                    precision: 2,  // quantidade de números antes da virgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // quantidade de números depois da virgula
                    precision: 2,  // quantidade de números antes da virgula
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
