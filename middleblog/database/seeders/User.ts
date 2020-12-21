import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
//seeding data using factory
import { UserFactory } from 'Database/factories'


const user = UserFactory.createMany(10)

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'steve@email.com',
        password: '00-=2+fshfjhsajfjkhas',

      },
      {
        email: 'lovemore1@gmail.com',
        password: '8857474fshfjhsajfjkhas',
      },
      {
        email: 'mle@mail.com',
        password: '55555fshfjhsajfjkhas',
      },
      {
        email: 'auditos@mail.com',
        password: 'wwwwfffshfjhsajfjkhas',
      },
      {
        email: 'auditf@mail.com',
        password: 'wwwwfshfjhsajfjkhas',
      },
      {
        email: 'infos@mail.com',
        password: 'fswwwwwhfjhsajfjksdsahas',
      },

    ])

  }
}

/**

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

 */


