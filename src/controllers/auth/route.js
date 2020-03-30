import { Router } from 'express'
import validate from 'express-validation'

import { authenticate } from '../../middleware'
import { UserDevice as UserDeviceRepository, User as UserRepository } from '../../models'
import AuthService from '../../services/authService'
import Controller from './controller'
import validation from './validation'

const basePath = `/auth`
const setPath = path => `${basePath}/${path}`
const routes = Router()
const controller = Controller({ authService: AuthService(UserRepository, UserDeviceRepository) })

routes.route(setPath('login')).post(validate(validation.login), controller.login)
routes.route(setPath('refresh')).post(validate(validation.refresh), controller.refreshToken)
routes.route(setPath('logout')).post(authenticate.jwt, validate(validation.logout), controller.logout)

export default routes
