const express = require('express'); 
const app= express();
const port = process.env.PORT || 4000;
const cors=require('cors');



app.use(cors());
app.use(express.json());



let users=[];
function randomNumber(){
return Math.floor(Math.random()*100000);

}

app.post("/users",(req,res)=>{

console.log(req.body);
let newUser={
id: randomNumber(),
name:req.body.name,
email: req.body.email
}

users.push(newUser);
res.status(201).send("user is created");
}

)


app.get('/users',(req,res)=>{

    res.send(users);
})



app.listen(port,(()=>{console.log(`server is running on port http://localhost:${port}`)}))
  

// create ==> post 
// read ==> get 
// update ==> put
// delete ==> delete