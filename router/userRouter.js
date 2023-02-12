const express = require("express");
const router = express();
const userController =require("../controllers/userController")


router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',userController.getHome); 
router.get("/about",userController.getAbout)
router.get("/contact",userController.getContact)
router.get("/compose",userController.compose)
router.post("/compose",userController.postCompose )
router.get('/posts/:postName',userController.getPost)

module.exports = router  