import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
//import Users from 'Database/migrations/1608305733502_users'
//import Database from '@ioc:Adonis/Lucid/Database'

//Active Record
/**
 * 

const users = await Database.from('users').select('*')

return users.map((user) => {
  user.dob = DateTime.fromJSDate(user.dob).toFormat('dd LLL yyyy')
  return user
})
 */

export default class User extends BaseModel {
  // public static table = 'auth_users'
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  /**
    //creating dob and formatting it
    @column.date({
      serialize: (value) => value.toFormat('dd LLL yyyy')
    })
    public dob: DateTime
  
    //Use dob as follows
    const users = await User.all()
    return Users.map((user) => User.toJSON())
     */
}
