// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/** 
import { HttpContext } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { schema, validator } from '@ioc:Adonis/Core/Validator';

export default class PostsController {
  public async create({ view }: HttpContextContract) {
      return view.render('posts/create')
  }
 
     public async store({ request, response, session }: HttpContextContract) {
 
        const data = request.only(['title', 'body'])
          console.log(data)
          return 'Handle'
       
         const postSchema = schema.create({
             title: schema.string(),
             body: schema.string(),
         })
 
         const data = await request.validate({
             schema: postSchema,
         })
         /**
         console.log(data)
         return 'Post created'
 
         
          * 
         
                 const data = await request.validate({
                     schema: postSchema,
                     cacheKey: request.url(),
                 })
                 
                 
 
         session.flash('success', 'Post created successfully')
         response.redirect('back')
          
     }
 
  public async store({ request, response, session }: HttpContextContract) {
      const postSchema = validator.compile(schema.create({
          title: schema.string(),
          body: schema.string(),
      }))
      const data = await request.validate({
          schema: postSchema,
          messages: {
              'title.required': 'Please enter post title',
              'body.required': 'Please enter post body',
          }
      })
      console.log(data)
      //return 'Post created
      session.flash('success', 'Post created successfully')
      response.redirect('back')
  }
}

   */

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import PostValidator from 'App/Validators/PostValidator'


export default class PostsController {
    public async create({ view }: HttpContextContract) {
        return view.render('posts/create')
    }

    public async store({ request, response, session }: HttpContextContract) {
        const data = await request.validate(PostValidator)
        session.flash('success', 'Post created successfully')
        response.redirect('back')
        console.log(data)
    }
}