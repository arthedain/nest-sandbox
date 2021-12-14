import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RolesMigration1639484010234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = {
      name: 'roles',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
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
    await queryRunner.dropTable('roles');
  }
}
