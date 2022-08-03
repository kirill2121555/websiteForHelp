const assistantService = require("../services/assistantService");
const needHelpModel = require('../models/needHelpModel')
const assistantModel = require('../models/assistantModel');
const userService = require("../services/userService");
const userModel = require("../models/userModel");




class AssistantController {

  async addNeedHelp(req, res, next) {
    try {
      const id = await userService.getId(req)
      const { name, secondName, phone, city, listThings, description } = req.body;
      const asist = await needHelpModel.create({ name: name, secondName: secondName, phone: phone, city: city, listThings: listThings, description: description })
      asist.save();
      const user = await userModel.findById(id)
      await user.needhelp.push(asist._id)
      await user.save()
      return res.json('add asist secsesful');
    } catch (e) {
      next(e);
    }
  }


  async updatepost(req, res, next) {
    const id = req.params.id
    const { name, phone, description, listThings, city, secondName } = req.body
    const nh = await needHelpModel.findByIdAndUpdate(id, { name: name, phone: phone, description: description, listThings: listThings, city: city, secondName: secondName })
    await nh.save()
    res.json('good')
  }


  async getAllNeedHelp(req, res, next) {
    try {
      const allNeedHelp = await needHelpModel.find();
      res.json(allNeedHelp)
    }
    catch (e) {
      next(e);
    }
  }
  async getNeedHelpPerson(req, res, next) {
    try {
      const id = await userService.getId(req)
      const needHelp = await needHelpModel.find()
      const a = []
      const user = await userModel.findById(id)

      for (let i = 0; i < user.needhelp.length; i++) {
        const nh = await needHelpModel.findById(user.needhelp[i])
        if (nh != null) {
          a.push(nh)
        }
      }
      res.json(a)
    } catch (error) {
      next(e);
    }
  }

  async getOneNeedHelp(req, res, next) {
    const id = req.params.id;
    const OneNeedHelp = await needHelpModel.findById(id);
    res.json(OneNeedHelp)
  }

  async deleteneedhelp(req, res, next) {
    const idnh = req.body;
    const id = await userService.getId(req)
    const nh = await needHelpModel.findByIdAndDelete(idnh.id)
    const user = await userModel.findById(id)
    for (let i = 0; i < user.needhelp.length; i++) {
      if (user.needhelp[i] == idnh.id) {
        user.needhelp[i] = undefined
        await user.save();
      }
    }
    await user.save();
    res.json('otlihno')
  }
}

module.exports = new AssistantController();