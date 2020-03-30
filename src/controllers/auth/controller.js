import httpStatus from 'http-status'

const AuthController = services => {
  const { authService } = services

  const login = async (req, res, next) => {
    const { username, password, imei } = req.body

    try {
      const [token, refreshToken] = await authService.login(username, password, imei)
      res.send({ token, refreshToken })
    } catch (err) {
      next(err)
    }
  }

  const refresh = async (req, res, next) => {
    const { token } = req.body

    try {
      const newToken = await authService.refreshToken(token)
      res.send({ token: newToken })
    } catch (err) {
      next(err)
    }
  }

  const logout = async (req, res, next) => {
    const { user } = req
    const { imei } = req.body

    try {
      authService.logout(user, imei)
      res.status(httpStatus.NO_CONTENT).send()
    } catch (err) {
      next(err)
    }
  }

  return {
    login,
    logout,
    refreshToken: refresh,
  }
}

export default AuthController
