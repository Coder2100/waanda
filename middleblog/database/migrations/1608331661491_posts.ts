import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('user_id').notNullable
      table.string('title')
      table.string('body')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
