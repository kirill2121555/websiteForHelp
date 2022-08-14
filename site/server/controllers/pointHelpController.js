const assistantService = require("../services/assistantService");
const userModel = require('../models/userModel')
const pointHelpModel = require('../models/pointHelpModel');
const mailService = require("../services/mail-service");
const logger=require('./../loger/loger')

class PointHelpController {
  async addPointHelp(req, res, next) {
    try {
      
      const { name, nameBoss, email, phone, region, address, city, listThings, description } = req.body;

      const asist = await pointHelpModel.create({
        name: name,
        nameBoss: nameBoss,
        phone: phone,
        address: address,
        city: city,
        email: email,
        region: region,
        listThings: listThings,
        description: description,
        views: 0,
        like: 0,
        dislike: 0
      })
     
      if (!asist) {
        res.status(400).json({ message: "Не удалось создать пост" })
      }
      res.status(200).json({ message: "Пост добавлен" })
    
    } catch (e) {
      logger.error(
        'Error in addPointHelp function'
       );
      next(e);
    }
  }


  async getAllPointHelp(req, res, next) {
    try {
      const { sort } = req.query
      let pointHelp
      switch (sort) {
        case 'like':
          pointHelp = await pointHelpModel.find().sort({ like: -1 });
          break;
        case 'views':
          pointHelp = await pointHelpModel.find().sort({ views: -1 });
          break;
          case 'date':
          pointHelp = await pointHelpModel.find().sort({ datecreate: -1 });
          break;
        default:
          pointHelp = await pointHelpModel.find();
          break;
      }
      res.status(200).json(pointHelp)
    }
    catch (e) {
      res.status(400).json('Error')
    }
  }

  async getOnePointHelp(req, res, next) {
    try {
      const id = req.params.id;
      const pointHelp = await pointHelpModel.findByIdAndUpdate(id);
      await pointHelp.updateOne({ views: pointHelp.views + 1 })
      res.status(200).json(pointHelp)
    } catch (error) {
      res.status(400).json('Error')

    }
  }


  async requesetaddPointHelp(req, res, next) {
    const { name, nameBoss, email, phone, region, address, city, listThings, description } = req.body;
    await mailService.requestforAddPointhelpMail(process.env.EMAIL_ADMIN, name, nameBoss, email, phone, region, address, city, listThings, description)
    await mailService.requestforAddPointhelpMail(email, name, nameBoss, email, phone, region, address, city, listThings, description)

    res.status(200).json({ message: "Ваша заявка отправлена. Проверте почту" })

  }
}

module.exports = new PointHelpController();