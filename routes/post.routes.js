const Router = require('express')
const postController = require('../controllers/post.controller')

const router =  new Router()


router.post('/post', postController.makePost)
router.get('/post', postController.getPost)

module.exports = router