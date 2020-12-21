import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'

import { schema } from '@ioc:Adonis/Core/Validator'
import { Request } from '@adonisjs/core/build/standalone'
import { validator } from 'Config/app'

export default class UsersController {
    public async store({ request }: HttpContextContract) {
        const avatar = request.file('avatar', {
            size: '2mb', extnames: ['jpg', 'png', 'jpeg'],
        })
        if (!avatar) {
            return 'Please upload the file'
        }

        const userName = schema.create({
            email: schema.string(),
            avatar: schema.file({
                size: '2mb',
                extnames: ['jpg', 'png', 'jpeg']
            }),
        })

        const data = await request.validate({
            schema: userName,
        })

        await avatar.move(Application.tmpPath('uploads'), {
            name: `${new Date().getTime()}.${avatar.extname}`,
        })
        if (avatar.hasErrors) {
            return avatar.errors
        }

        await data.avatar.move(Application.tmpPath('uploads'))
        return 'File uploaded successfully'
    }
}
/**
 * custom errors
 * const messages = {
 * 'avatar.file.extname': 'you can only upload images',
 * avatar.file.size: 'Image size must be under 2mb',}

const data = await Request.validate({
    schema: validator.compile(userSchema),
    message,
})

*/