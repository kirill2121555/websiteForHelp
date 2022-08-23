const {Schema, model}=require('mongoose');

const UserSchema=new Schema({

    email:{type:String,required: true,unique:true},
    password:{type:String,required: true},
    activateLink:{type:String},
    isActivate:{type:Boolean,default:false},
    role: {type: String, default: "USER"},
    removepassword:{type:String, default:''},
    nick:{type:String,required: true },
    assist:[{type:Schema.Types.ObjectId, ref:'Assistant'}],
    needhelp:[{type:Schema.Types.ObjectId, ref:'NeedHelp'}],
    //dialogswhithPeople:[{type:Schema.Types.ObjectId, ref:'User'}],
    //dialogs:[{type:Schema.Types.ObjectId, ref:'Dialog'}]
    dialogs: {
        type: Map,
        of: String,
        default:''},
    //id типов с которыми общаюсь и ID на диалог
})

module.exports=model('User',UserSchema);