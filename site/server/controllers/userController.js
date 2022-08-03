//const urlService = require("../services/userService");
const userModel = require('../models/userModel')
const userService = require('../services/userService')
const ApiError = require('../exception/api-error');
const { validationResult } = require('express-validator')
const roleModel = require('../models/roleModel')
const bcrypt = require('bcrypt')
const MailService = require('../services/mail-service')
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const mailService = require('../services/mail-service');
const assistantModel = require('../models/assistantModel');

const generateJwt = (id, email, role, nick) => {
  return jwt.sign(
    { id, email, role, nick },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '24h' }
  )
}

class UserController {


  async registration(req, res, next) {
    const { email, password, nick, role } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await userModel.findOne({ email: email })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const activateLink = uuid.v4()
    const user = await userModel.create({ email, role, password: hashPassword, activateLink: activateLink, nick: nick })
    const token = generateJwt(user.id, user.email, user.role, user.nick)
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activateLink}`)
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    if (!user.isActivate) {
      return next(ApiError.internal('Акаунт не активирован! Перейдите на почту и активируйте аккаунт'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role, user.nick)
    return res.json({ token })
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.nick)
    return res.json({ token })
  }


  async tryremovepassword(req, res, next) {
    const { email } = req.body
    const activateLink = uuid.v4()
    const user = userModel.findOne({ email: email })
    const a = await userModel.updateOne({ email: email }, { removepassword: activateLink })
    await mailService.sendRemovePasswordMail(email, `${process.env.CLIENT_URL}/removePassword/${activateLink}`)
    res.json('good')
  }

  async removepassword(req, res, next) {
    const { email, password, id } = req.body
    await userService.removepassword(email, password, id)
    res.json('likr')
    return true
  }

 

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e)
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      await userService.activate(activationLink)
      return res.redirect(process.env.Cl_URL)
    } catch (e) {
      next(e)
    }
  }






}

module.exports = new UserController();



