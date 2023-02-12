const express = require("express");
const ejs = require("ejs");
const path = require("path");
const userRouter = require('./router/userRouter')
var _ = require("lodash");
const dbconnect = require('./config/connection')
const cors        = require('cors');

dbconnect.dbconnect();



const app = express();
   
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{ 
  res.set(
      "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );   
  next();
});

app.use('/',userRouter)  



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
 
