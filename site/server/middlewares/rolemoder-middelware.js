const userModel = require("../models/userModel");
const userService = require("../services/userService");


module.exports = async function (req, res, next){
    
    try {
        console.log('vi v miidelvare')
       const userid=await userService.getId(req);
       const user=await userModel.findById(userid)
      // console.log(user)
       if(user.role=='MODERATOR'){
        console.log('utrrrrra')
        return next()
       }
       return res.status(401).json({message: "Нет доступа"})
    } catch (e) {
        res.status(401).json({message: "Ошибка"})
    }
};
