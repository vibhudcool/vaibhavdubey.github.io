const fs = require('fs');
const exp = require('express');

const obj = new exp();

obj.get('/form',(req,res)=>{
        res.sendFile(__dirname+'/index.html');

})

obj.get('/access_data',(req,res)=>{
        const student ={
                Name: req.query.name,
                Reg_id: req.query.regid,
                Password: req.query.password,
                University: req.query.university,
                Gender: req.query.gender
        }
        const data = JSON.stringify(student,null,2) + "\n";
        
        fs.appendFile("Student.txt",data,(err)=>{
                if(err){
                        throw err;
                }
                res.send("Data Saved Successfully");
        })
});

obj.listen(3000,()=>{
        console.log("Server is running");
})
