/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|

*/

import Route from '@ioc:Adonis/Core/Route'

//Route.on('/').render('welcome')
Route.get('/posts', async ({ view }) => {
    return view.render('posts/index')
})



Route.get('posts/create', 'PostsController.create')

Route.post('posts', 'PostsController.store')

Route.on('users/create').render('users/create')

//node ace make:view users/create

Route.post('users', 'UsersController.store')

Route.get('/', async ({ session, view }) => {
    return view.render('Welcome', {
        userLanguage: session.get('userLanguage'),
    })
})

/**Route.get('/language/:name', async ({ session, params, response }) => {
    session: put('userLanguage', params.name)
    response.redirect('back')
})
 */

//npm init adonis-ts-app middleblog
