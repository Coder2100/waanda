import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		title: schema.string(),
		body: schema.string(),
	})

	public cacheKey = this.ctx.routeKey

	public messages = {
		'title.requred': 'Please enter the title',
		'body.required': 'Please enter post body'
	}
}
