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

Route.get('/', async () => {
  return "<h1>Hello world!<h2>"
})
/*
Route.get('/service', async ({view}) =>{
  return view.render('services')
})
rendering views from the routes 

//JSON Response
Route.get('/', async () => {
  return {
    id:1,
    username: 'virk',
    email: 'vir@email.com',
  }
})
controllers
used to collect data from models and pass it to the views ie html
import Route from '@ioc:Adonis/Core/Route'
Route.get('posts', 'PostsController.index')

controlle to have something like...
import Post from 'App/Models/Post'

export default class PostsController{
  public async index ({view}){
    const posts = await Post.all()
    return view.render('posts', {posts})
  }
}

views
@each (post in posts)
<h2> {{ posts.title }}</h2>
<p> {{ posts.body }}</p>
@endach

views are set out below

<body>
@set('users', [
  {username: 'mtotso'},
  {username: 'sotywambe'},
  {username: 'london'}
])
<ul>
</ul>
@each(user in users)
<li>{{ user.username }}</li>
@endeach
</body>

models
declaring a model
import {BaseModel, column } from '@ioc: Adonis/Lucid/Orm'

class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string


  //middleware
  import {HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  export class AuthMiddleware{
    public async handle ({ session, response}: HttpContextContract, next){
      if(!session.userId){
        return response.status(401).send('you not authorised')
      }
      await next()
    }
  }
}


accessing the context

Route.get('/', async (ctx) => {
  console.log(ctx.insepect())
})

*/

Route.get('/about', async () => {
  return 'This is ABOUT page'
})

/*

node ace serve --watch
*/
Route.get('/contact', async () => {
  return 'This is the contact page'
})

//Route.on('/').render('home')
/*
view stay in resources/view/home.edge
Route.on('/).render('home')

Route.get('users), 'UsersController.index'

Route.get('admin/users', 'Admin/UserController.index')

Route.get('users', async () =>{

})

dynamic urls


}))


Route.get('/posts/:id', async ({ params }) => {
  return ` you are viewing a blog posts with id ${params.id}`
})

Route.get('/posts/:id?', async ({ params }) => {
  if (params.id) {
    return `you are viewing blog posts with id ${params.id}`
  } else {
    return ` you are viewing all blog posts`
  }
})

Route.get('/posts/:id', async () => {
  // dadadada
}).where('id', /^[0-1]+/)


Route.group(() => {
  Route.get('/:id', 'handler').where('id', /^[0-9]+$/)
}).where('id', /^[a-z]+$/)



//get all post
Route.get('/posts', async () => {
  return 'List of posts';
})

Route.post('/posts', async () => {
  return 'create a new poast';
})


//crud application routes for a blog application

Route.post('/posts', async () => {
  return 'Perform create'
})

Route.get('/posts', async () => {
  return 'perform read';
})

Route.get('/posts/:id', async () => {
  return 'perform reading of the single post'
})

Route.put('/posts/:id', async () => {
  return 'perform update'
})

Route.delete('/posts/:id', async () => {
  return 'perform delete'
})


Route.resource('posts', 'PostsController')

//creating api server| the routes to display forms are redunt and can be removed using the apiOnly method

Route
  .resource('posts', 'PostsController')
  .apiOnly()


//filtering resourceful routes

Route
  .resource('comments', 'CommentsController')
  .except(['update', 'destroy'])


//nested routes
Route.resource('posts.comments', 'CommentsController')

//Route Gropus

Route.group(() => {
  //all routes here are part of group

})

Route
  .group(() => {
    Route.get('/', 'PostsController.index')
    Route.get('/posts/:id', 'PostsController.show')
  })
  .prefix('/blog')

//midleware
Route.get('/users/:id', async () => {
  return 'show user'
})
  .middleware(async (ctx, next) => {
    console.log(`inside middleware ${ctx.request.url.url()}`)
    await next()
  })

  */

//midleware
/*
Route.get('/users/:id', async () => {
  return 'show user'
})
  .middleware(async (ctx, next) => {
    console.log(`inside middleware ${ctx.request.url()}`)
    await next()
  })


Route
  .get('/users/:id', 'UserController.show')
  .middleware('sample')

//Applying middleware to route group
Route
  .group(() => {
    Route
      .put('/posts/:id', 'PostsController.update')
      .middleware('postAuthor')
  })
  .middleware('auth')
//auth route will be executed before the postAuthor middleware

Route
  .resource('users', 'UsersController')
  .middleware({ '*': [auth] })

  when selectively applying middleware to certain routes, the object key is the nme of the route and value is an array of the middleware to apply



Route
  .resource('posts', 'PostsController')
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
  })

//routes for multiple domains

Route
  .group(() => {
    //scoped to blog.adonisjs.com only
  })
  .domain('blog.adonisjs.com')



Route
  .group(() => {
    Route.get('/', async ({ subdomains }) => {
      return `tenant: $subdomains.tenant`
    })
  })
  .domain(':tenant.myapp.com')



Route.get('/users/:id', 'UsersController.show')

  //template
  < form action = "{{ route('/users/:id', {params: {id:1}})}}" > </form>



//renaming routes with name
Route
  .get('/users/:id', 'UsersController.show')
  .as('showUser')

  < form action = "{{'showUser', {params: {id: id}}}}" > </form>


//naming resourceful routes
Route
  .resource('comments', 'CommentsController')
  .only(['index', 'create', 'store', 'show', 'edit'])

//nested resources
Route.resource('posts.comments', 'CommentsController')

//route prefix
Route
  .group(() => {
    Route.get('/', 'PostsController.index')
    Route.get('/posts/:id', 'PostsController.show')
  })
  .prefix('/blog')

Route
  .group(() => {
    Route.get('/', 'PostsController.index')

    Route
      .group(() => {
        Route.get('/', 'PostsApiController.index')
      })
      .prefix('/api')
  })
  .prefix('/blog')



Route
  .get('/users/:id', async () => {
    return 'show user'
  })
  .middleware(async (ctx, next) => {
    console.log(`inside middleware $ctx.request.url`)
    await next()
  })



Route
  .group(() => {
    Route.get('/', async ({ subdomains }) => {
      return `tenant: ${subdomains.tenant}`
    })
  })
  .domain(':tenant.myapp.com')

Route.get('/users/:id', 'UsersController.show')

  < form action = {{ Route('/users/:id', { params: { id: 1 } }) }}> </form>



  Route.resource('users', 'UserController')

  Route
  .group(() => )

   */
Route.get('users', 'UsersController.index')

Route.get('/posts', async ({ view }) => {
  const posts = [
    {
      id: 1,
      title: 'Getting started with Adonis',
      body: '',
    },
    {
      id: 2,
      title: 'Covering Basics of Lucid ORM',
      body: '',
    },
    {
      id: 3,
      title: 'Understanding Build Process',
      body: '',
    }
  ]
  return view.render('posts/index', { posts })
})

Route.get('/signup', async ({ view }) => {
  return view.render('signup')
})