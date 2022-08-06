const {Schema, model}=require('mongoose');

const pointHelpSchema=new Schema({
    name:{type:String,required: true},
    nameBoss:{type:String,required: true,unique:true},
    phone:{type:String,required: true},
    address:{type:String,required: true},
    city:{type:String,required: true},
    email:{type:String,required: true},
    region:{type:String,required: true},
    listThings:{type:String},
    description:{type:String},
    comment:[{type:Schema.Types.ObjectId, ref:'Comment'}],

})


module.exports=model('pointHelp',pointHelpSchema);