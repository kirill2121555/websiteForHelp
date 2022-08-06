const assistantService = require("../services/assistantService");
const userModel = require('../models/userModel')
const assistantModel = require('../models/assistantModel')
const userService = require('./../services/userService')
const jwt = require('jsonwebtoken');
const fileMideeleware = require("../middlewares/file-mideeleware");




class AssistantController {



  async addAt(req, res, next) {
    try {
      const a = await userService.getId(req)
      if (req.file) {
        res.json(req.file)
      }
    } catch (e) {
      console.log(e)
    }

  }

  async addAsistant(req, res, next) {
    try {
      const id = await userService.getId(req)
      const { name, email, phone, city, description, title, pictur } = req.body;
      const newName = undefined;
      if (pictur !== undefined) {
        newName = await assistantService.renameFile(pictur)
      }
      const asist = await assistantModel.create({ name: name, email: email, phone: phone, city: city, description: description, title: title, picture: newName })
      await asist.save();
      const user = await userModel.findById(id)
      await user.assist.push(asist._id)
      await user.save()
      res.status(200).json({message: "Пост добавлен"})
    } catch (e) {
      next(e);
    }
  }


  async getAsistant(req, res, next) {
    try {
      const asist = await assistantModel.find();
      res.json(asist)
    }
    catch (e) {
      next(e);
    }
  }


  async getOneAsistant(req, res, next) {
    const id = req.params.id;
    const assistant = await assistantModel.findById(id);
    res.json(assistant)

  }

  async getAsistPerson(req, res, next) {
    const id = await userService.getId(req)
    const asist = await assistantModel.find()
    const a = []
    const user = await userModel.findById(id)

    for (let i = 0; i < user.assist.length; i++) {
      const asist = await assistantModel.findById(user.assist[i])
      if (asist != null) {
        a.push(asist)
      }
    }
    res.json(a)
  }

  async deleteassist(req, res, next) {
    const idnh = req.body;
    const id = await userService.getId(req)
    const nh = await assistantModel.findByIdAndDelete(idnh.id)
    const user = await userModel.findById(id)
    for (let i = 0; i < user.assist.length; i++) {
      if (user.assist[i] == idnh.id) {
        user.assist[i] = undefined
        await user.save();
      }
    }
    await user.save();
    res.status(200).json({ message: "Пост удален" })

  }

  async updateOneAsistant(req, res, next) {
    const id = req.params.id
    const { name, phone, description, city, email, title } = req.body
    const as = await assistantModel.findByIdAndUpdate(id, { name: name, phone: phone, description: description, city: city, email: email, title: title })
    await as.save()
    res.status(200).json({ message: "Пороль обновлен" })

  }

}



module.exports = new AssistantController();