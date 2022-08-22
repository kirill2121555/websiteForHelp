const { Schema, model } = require('mongoose');

const DialogSchema = new Schema({

  room_uuid: { type: String, default: 0 },
  ad_name: { type: String, default: '' },
  messages: [
    {
      username: { type: String },
      message: { type: String },
    }
  ],
  //user_o:[{type:Schema.Types.ObjectId, ref:'User'}],
  //user_t:[{type:Schema.Types.ObjectId, ref:'User'}],

})

module.exports = model('Dialog', DialogSchema);