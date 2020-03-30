import httpStatus from 'http-status'

const Controller = repositories => {
  const { groupRepository, menuRepository } = repositories

  const index = async (req, res, next) => {
    try {
      const { rows, count } = await groupRepository.findAndCountAll(req.query)
      res.page(rows, count)
    } catch (err) {
      next(err)
    }
  }

  const show = async (req, res, next) => {
    const { id } = req.params

    try {
      const group = await groupRepository.findByPk(id)
      res.send(group)
    } catch (err) {
      next(err)
    }
  }

  const store = async (req, res, next) => {
    const { user, body } = req

    try {
      const [group, created] = await groupRepository.findOrCreate({ where: body, user })

      if (created) {
        const menus = await menuRepository.findAll({ attributes: ['id'], raw: true })
        await group.addMenus(menus.map(menu => menu.id))
      }

      res.status(httpStatus.CREATED).send()
    } catch (err) {
      next(err)
    }
  }

  const update = async (req, res, next) => {
    const { user } = req
    const { id } = req.params
    const { name } = req.body

    try {
      const group = await groupRepository.findByPk(id)

      if (group) {
        await group.update({ name }, { user }).then(result => res.status(httpStatus.OK).send(result))
      } else {
        res.status(httpStatus.NOT_FOUND).send()
      }
    } catch (err) {
      next(err)
    }
  }

  const destroy = async (req, res, next) => {
    const { user } = req
    const { id } = req.params

    try {
      const group = await groupRepository.findByPk(id)

      if (group) {
        await group.destroy({ user })
        res.status(httpStatus.NO_CONTENT).send()
      } else {
        res.status(httpStatus.NOT_FOUND).send()
      }
    } catch (err) {
      next(err)
    }
  }

  return {
    index,
    show,
    store,
    update,
    destroy,
  }
}

export default Controller
