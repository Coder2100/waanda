import Event from '@ioc:Adonis/Core/Event'

import Database from '@ioc:Adonis/Lucid/Database'
//import User from 'App/Models/User'

Event.on('db:query', Database.prettyPrint)
/**
 *
*/



