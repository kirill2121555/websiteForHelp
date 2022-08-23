const mongoose = require('mongoose')
const uuid = require('uuid');
const userModel = require('./model/userModel')
const dialogModel = require('./model/dialogModel')
const express = require('express')
const app = express()
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})
const cors = require('cors')
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


io.on('connection', (socket) => {
  console.log('connect', socket.id);

  socket.on('message', async (data) => {
    const user = await userModel.findById(data.i)
    const isdialog = await user?.dialogs.get(data.to)
    let dialog = 0;
    dialog = await dialogModel.findById(isdialog)
    dialog.messages.push({ username: data.username, message: data.message })
    dialog.save()
    socket.join(dialog.room_uuid)
    io.to(dialog.room_uuid).emit('message', JSON.stringify(data));
  })
});

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://root:root@cluster0.xlabe.mongodb.net/?retryWrites=true&w=majority')
    server.listen(9999, () => console.log('start'));
    const a = await userModel.find()
  } catch (e) {
    console.log(e)
  }
}

start()

