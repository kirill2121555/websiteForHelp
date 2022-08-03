const {Schema, model}=require('mongoose');

const AssistantSchema=new Schema({
    name:{type:String,required: true},
    email:{type:String,required: true,unique:true},
    phone:{type:String,required: true},
    city:{type:String,required: true},
    description:{type:String},
    title:{type:String}
})

module.exports=model('Assistant',AssistantSchema);