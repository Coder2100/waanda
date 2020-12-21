import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import View from '@ioc:Adonis/Core/View'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    const posts = Post.all()
    //return posts
    return ctx.view.render('posts/index', { posts })
  }

  public async create({ request }: HttpContextContract) {

  }

  public async store({ }: HttpContextContract) {
  }

  public async show(ctx: HttpContextContract) {
    const post = await Post.find(ctx.params.id)
    return ctx.view.render('posts/show', { post })
  }


  public async edit({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
