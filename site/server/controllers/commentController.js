const userModel = require('../models/userModel');
const userService = require('../services/userService');
const commentModel = require('../models/commentModel')
const pointHelpModel = require('../models/pointHelpModel');
const markModel = require('../models/markModel');

const { getId } = require('../services/userService');
class CommentController {
    async CreateComment(req, res, next) {
        console.log('CreateComment')
        const { text, timeCreate } = req.body
        const idPH = req.params.id;
        const id = await userService.getId(req)

        const user = await userModel.findById(id)
        const newcomment = await commentModel.create({ user: user._id, usernick: user.nick, text: text, timeOfCreation: timeCreate })
        const postHelp = await pointHelpModel.findById(idPH)
        await postHelp.comment.push(newcomment._id)
        await postHelp.save();
        res.status(200).json({ message: "Коментарий создан" })


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

    async grade(req, res, next) {
        try {
            const iduser = await userService.getId(req)
            const id = req.params.id
            const { mark } = req.body
            const a = await markModel.findOne({ pointHelpId: id, userId: iduser })
            if (!a) {
                const a = await markModel.create({ pointHelpId: id, userId: iduser })
            }
            const proshlayMark = a.mark
            const pH = await pointHelpModel.findById({ _id: id })
            if (proshlayMark === mark) {
                --pH[proshlayMark]
                a.mark = 0
                await a.save()
                await pH.save()
                return res.status(200).json('nagata ta ge knopka')
            }
            mark === 'like' ? a.mark = 'like' : a.mark = 'dislike'
            await a.save()
            if (pH[proshlayMark] !== 0) {
                --pH[proshlayMark]
                await pH.save()
            }
            ++pH[mark]
            await pH.save()
            return res.status(200).json(a.mark)
        } catch (error) {
            res.status(400).json('error')
        }
    }

    async getmark(req, res, next) {
        const iduser = await userService.getId(req)
        const id = req.params.id
        const a = await markModel.findOne({ pointHelpId: id, userId: iduser })
        if (a) {
            return res.status(200).json(a.mark)
        }
        const aa = await markModel.create({ pointHelpId: id, userId: iduser })
        return res.status(200).json(aa.mark)
    }
}

module.exports = new CommentController();



