const Router=require('express')
const router=new Router()
const userController = require('../controllers/userController');
const assistantController = require('../controllers/assistantController');
const needHelpController = require('../controllers/needHelpController');
const pointHelpController = require('../controllers/pointHelpController');
const {body}=require('express-validator')
const authMiddleware=require('../middlewares/auth-middleware');
const roleMiddleware=require('../middlewares/role-middleware');



router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:3,max:15}),
    userController.registration);
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/logout',userController.logout);

router.get('/activate/:link',userController.activate);

router.post('/tryremovepassword',userController.tryremovepassword);
router.post('/removepassword',userController.removepassword);




router.get('/getAsistant',assistantController.getAsistant)
router.get('/getOneAsistant/:id',assistantController.getOneAsistant)


router.get('/getAsistPerson',authMiddleware,assistantController.getAsistPerson)
router.post('/deleteassist',authMiddleware,assistantController.deleteassist)
router.post('/updateOneAsistant/:id',authMiddleware,assistantController.updateOneAsistant)
router.post('/addAsistant',authMiddleware,assistantController.addAsistant)










router.post('/deleteneedhelp',authMiddleware,needHelpController.deleteneedhelp)
router.post('/addNeedHelp',authMiddleware,needHelpController.addNeedHelp)
router.post('/updatepost/:id',authMiddleware,needHelpController.updatepost)
router.get('/getNeedHelpPerson',authMiddleware,needHelpController.getNeedHelpPerson)

router.get('/getAllNeedHelp',needHelpController.getAllNeedHelp)
router.get('/getOneNeedHelp/:id',needHelpController.getOneNeedHelp)



router.get('/getAllPointHelp',pointHelpController.getAllPointHelp)
router.get('/getOnePointHelp/:id',pointHelpController.getOnePointHelp)

router.post('/addPointHelp',authMiddleware,pointHelpController.addPointHelp)





module.exports=router