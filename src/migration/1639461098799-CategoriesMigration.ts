import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CategoriesMigration1639461098799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = {
      name: 'categories',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          onUpdate: 'now()',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    };

    await queryRunner.createTable(new Table(columns), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
