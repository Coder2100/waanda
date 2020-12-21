import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
    public async index({ request, view, session }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 3

        const posts = await Post.query().paginate(page, limit)
        posts.baseUrl('/posts')
        session.flash('success', 'Post have been created')

        //pass an object
        session.flash({
            success: 'Post have been created'
        })
        return view.render('posts/index', { posts })

    }

    public async create({ view, session }: HttpContextContract) {
        console.log(session.flashMessages.all())
        console.log(session.flashMessages.get('errors'))
        console.log(session.flashMessages.has('success'))
        return view.render('posts / create')
    }
}

//resources/views/index.edge
