const assistantService = require("../services/assistantService");
const userModel = require('../models/userModel')
const pointHelpModel = require('../models/pointHelpModel');
const mailService = require("../services/mail-service");


class PointHelpController {
  async addPointHelp(req, res, next) {
    try {
      const { name, nameBoss, email, phone, region, address, city, listThings, description } = req.body;

      const asist = await pointHelpModel.create({ name: name, nameBoss: nameBoss, phone: phone, address: address, city: city, email: email, region: region, listThings: listThings, description: description })
     
      if (!asist) {

        res.status(400).json({message: "Не удалось создать пост"})
      }
      res.status(200).json({message: "Пост добавлен"})


    } catch (e) {
      next(e);
    }
  }


  async getAllPointHelp(req, res, next) {
    try {
      const pointHelp = await pointHelpModel.find();
      res.json(pointHelp)
    }
    catch (e) {
      next(e);
    }
  }
  async getOnePointHelp(req, res, next) {
    const id = req.params.id;
    const pointHelp = await pointHelpModel.findById(id);
    res.json(pointHelp)
  }


  async requesetaddPointHelp(req, res, next) {
    const { name, nameBoss, email, phone, region, address, city, listThings, description } = req.body;
    await mailService.requestforAddPointhelpMail(process.env.EMAIL_ADMIN, name, nameBoss, email, phone, region, address, city, listThings, description)
    await mailService.requestforAddPointhelpMail(email, name, nameBoss, email, phone, region, address, city, listThings, description)
    
    res.status(200).json({message: "Ваша заявка отправлена. Проверте почту"})

  }
}

module.exports = new PointHelpController();