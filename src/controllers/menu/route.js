import { Router } from 'express';
import validate from 'express-validation';

import { authenticate, paginate } from '../../middleware';
import { Group as groupRepository, Menu as menuRepository } from '../../models';
import Controller from './controller';
import validation from './validation';

const basePath = `/menus`;
const setPath = path => `${basePath}/${path}`;
const routes = Router();
const controller = Controller({ menuRepository, groupRepository });

routes
  .route(basePath)
  .get(authenticate.jwt, validate(validation.index), paginate, controller.index)
  .post(authenticate.jwt, validate(validation.store), controller.store);

routes
  .route(setPath(':id'))
  .get(authenticate.jwt, validate(validation.show), controller.show)
  .put(authenticate.jwt, validate(validation.update), controller.update)
  .delete(authenticate.jwt, validate(validation.destroy), controller.destroy);

export default routes;
