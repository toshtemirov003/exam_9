import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('advert', (table) => {
    table.uuid('advert_id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('advert_sell').notNullable();
    table.string('advert_buy').notNullable();
    table.string('url', 64).notNullable();
    table.string('picture', 64).notNullable();
    table
      .timestamp('advert_created_at', { useTz: false })
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('advert');
}
