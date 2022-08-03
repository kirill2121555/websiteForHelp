const assistantService = require("../services/assistantService");
const userModel=require('../models/userModel')
const pointHelpModel=require('../models/pointHelpModel')


class PointHelpController{
  async addPointHelp (req,res,next){
    try {
        const {name,nameBoss, email,phone,region,address,city} = req.body;
        const asist=await pointHelpModel.create({name:name,nameBoss:nameBoss, phone:phone, address:address,city:city,email:email,region:region})
        asist.save();
        if(!asist){
          res.render('error',{ title: 'Ошибка авторизайтт', error: 'oshibka'}); 
        }
        res.render('add_Point_Help');

    } catch (e) {
       next(e);
    }
  }


  async getAllPointHelp (req,res,next){
    try {
        const pointHelp=await pointHelpModel.find();
        res.json(pointHelp)
        }
         catch (e) {
       next(e);
    }
  }
  async getOnePointHelp(req,res,next){
            const id =  req.params.id;
            const pointHelp=await pointHelpModel.findById(id);
            

          res.json(pointHelp)
}


}

module.exports=new PointHelpController();