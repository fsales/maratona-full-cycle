import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoriaTable1598748220427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'categoria',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'nome',
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categoria');
    }

}
