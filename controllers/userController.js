const Blog = require('../model/blogSchema');


const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

module.exports={
   
   

    getHome:async(req,res)=>{
        const data  = await Blog.find({})
       if(data){
             res.render("home",{posts:data});
        }
     },
     getAbout:async(req,res)=>{     
       res.render("about",{content:aboutContent})   
     },
    getContact:async(req,res)=>{
           res.render("contact",{content:contactContent })     
    },
    compose:async(req,res)=>{
     res.render("compose");
          
    },
    postCompose:async(req,res)=>{
        const data = {
           title:req.body.postTitle,
           body:req.body.postBody
         }
           const blogData = new Blog(data);
           blogData.save()
           res.redirect("/");
    }, 
    getPost:async(req,res)=>{
        const id = req.params.id
        const post =   await Blog.findOne({_id:id})
        res.render("post",{
        title:post.title,
        content:post.body  
        })
}
}