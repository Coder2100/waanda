import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
//import request

export default class UsersController {
    public async index() {
        //short hand
        //  const users = await User.all()
        //long hand
        const users = await Database.from('users').select('*')
        //console.log(users)
        return users
    }

    public async store({ request }: HttpContextContract) {
        const data = request.only(['email', 'password', 'createdAt', 'updatedAt'])
        // await addUser.save()
        const user = await User.create(data)
        return user

    }
    public async show({ params }) {
        const user = await User.find(params.id)
        return user
    }
    /** 
        public async pagenate() {
            //const page = request.input('page', 1)
            const page = request.input('page', 1)
            const limit = 10
            const users = await User.query().paginate(page, limit)
            return users
        }
        */
}

/**
 Query builder
 SELECTING
 Database.query().from('users')

 //shortcut
 Database.from('users')

 INSERTING
 Database.insertQuery().table('users')
 //shortcut
 Database.table('users')

 RAW QUERIES
 const users = await Database.rawQuery('select * from users;')
 //limit condition
 const user = await Database.query().select('*').from('users').first()

 //Inserting raws
 await Database
    .insertQuery()
    .table('users')
    .insert({username: 'virk', email: 'virk@example.com'})


    //returning method
    const [id] = await Database
       .table('users')
       .returning('id')
       .insert({})

    //multiple column
    const [{ username, id}] = await Database
      .table('users')
      .returning(['id', 'username'])
      .insert({})
// multiple insert
await Database.table('users').multipleInsert({
    {username: 'virk'},
    {username: 'romania'},

UPDATING AND DELETING ROWS

UPDATE

await Database
    .from('users')
    .where('users', 'virk')
    .update({account_status: 'verfied'})

DELETE
await Database
   .from('posts')
   .where('slug', 'dummy_post')
   .delete()


   RAW QUERIES
   //import Database from '@ioc:Adonis/Lucid/Databse'

   const user = await Database
      .rawQuery('select * from users where id = ?', [1]) //safe way here


      AGGREGATES
    const total = await Database.query().count('*').from('users')

    Use Alias
    await Database.query().count('*as total').from('users')

})
 */
