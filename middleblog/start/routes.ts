
import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

//import Database from '@ioc:Adonis/Core/Lucid/Database'
//import Database from '@ioc:Adonis/Lucid/Database'
/**
Route.get('/', async ({ session, view }) => {
    return view.render('welcome', {
        userLanguage: session.get('userLanguage'),
    })
})


Route.get('/hello', async () => {
    return 'Hello world!'
})

Route.get('/language/:name', async ({ session, params, response }) => {
    session.put('userLanguage', params.name)
    response.redirect('back')
})

Route.get('test', async () => {
    return Database.query().select('*').from('users')
})

*/
//node ace make:controller Post

Route.get('/health', async ({ response }) => {
    const report = await HealthCheck.getReport()

    return report.healthy
        ? response.ok(report)
        : response.badRequest(report)
})



Route
    .resource('movies', 'MoviesController')
    .only(['index', 'show'])//limiting api to only index and show
    .apiOnly()//excludes the rest of the functions

Route
    .resource('users', 'UsersController')
// .only(['index', 'show'])
    .apiOnly()


Route.get('/posts', 'PostsController.index')
//Route.post('/users', 'UsersController.store')

Route.get('/', async () => {
    return 'Hello world!'
})
