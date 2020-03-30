import httpStatus from 'http-status'

const Controller = repositories => {
  const { menuRepository, groupRepository } = repositories

  const index = async (req, res, next) => {
    try {
      const { rows, count } = await menuRepository.findAndCountAll(req.query)
      res.page(rows, count)
    } catch (err) {
      next(err)
    }
  }

  const show = async (req, res, next) => {
    const { id } = req.params

    try {
      const menu = await menuRepository.findByPk(id)
      res.send(menu)
    } catch (err) {
      next(err)
    }
  }

  const store = async (req, res, next) => {
    const { user, body } = req

    try {
      const [menu, created] = await menuRepository.findOrCreate({ where: body, user })

      if (created) {
        const groups = await groupRepository.findAll({ raw: true })
        await menu.addGroups(groups.map(group => group.id))
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
      const menu = await menuRepository.findByPk(id)

      if (menu) {
        await menu.update({ name }, { user }).then(result => res.status(httpStatus.OK).send(result))
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
      const menu = await menuRepository.findByPk(id)

      if (menu) {
        await menu.destroy({ user })
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
