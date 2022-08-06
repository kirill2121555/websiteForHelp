const userModel = require('../models/userModel');
const userService = require('../services/userService');
const commentModel = require('../models/commentModel')
const pointHelpModel = require('../models/pointHelpModel')
class CommentController {
    async CreateComment(req, res, next) {
        console.log('CreateComment')
        const { text, timeCreate } = req.body
        const idPH = req.params.id;
        const id = await userService.getId(req)

        const user = await userModel.findById(id)
        const newcomment = await commentModel.create({ user: user._id, usernick: user.nick,text: text, timeOfCreation: timeCreate })
        const postHelp = await pointHelpModel.findById(idPH)
        await postHelp.comment.push(newcomment._id)
        await postHelp.save();
        res.status(200).json({message: "Коментарий создан"})

        
    }
    async GetComments(req, res, next) {
        const idPH = req.params.id;
        const postHelp = await pointHelpModel.findById(idPH)
        const comments = []
        for (let i = 0; i < postHelp.comment.length; i++) {
            const comment = await commentModel.findById(postHelp.comment[i])
            comments.push(comment)
        }
        res.json(comments)
    }

}

module.exports = new CommentController();



