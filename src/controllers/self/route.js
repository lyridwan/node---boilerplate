import { Router } from 'express'
import validate from 'express-validation'

import { authenticate } from '../../middleware'
import { UserProfile as userProfileRepository, User as userRepository } from '../../models'
import Controller from './controller'
import validation from './validation'

const basePath = `/self`
const setPath = path => `${basePath}/${path}`
const routes = Router()
const controller = Controller({ userRepository, userProfileRepository })

routes.route(basePath).get(authenticate.jwt, controller.index)
routes
  .route(setPath('changePassword'))
  .post(authenticate.jwt, validate(validation.changePassword), controller.changePassword)

routes
  .route(setPath('devices'))
  .get(authenticate.jwt, controller.device.index)
  .post(authenticate.jwt, validate(validation.device.store), controller.device.store)

routes.route(setPath('groups')).get(authenticate.jwt, controller.group.index)
routes.route(setPath('menus')).get(authenticate.jwt, controller.menu.index)

export default routes
