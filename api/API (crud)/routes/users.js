var express = require('express');
var router = express.Router();
var Crud = require('./modal/crud');


/* Create users listing. */
router.post('/create', (req, res, err)=> {
  // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type:application/json');
  var crud=new Crud(req.body);
  console.log(req.body);
  crud.save()
    .then((crud) => {
      res.status(200).json({'message':'Inserted Sucessfully'});
    }).catch((err) => {
      res.status(400).json({'message':'Unable To Insert Data'});
    });
      //#region Unused Post Route
  // Crud.create({
  //   name: req.body.name,    //in place of name put inputName to run it inside the ejs file of the server
  //   email: req.body.email,  //in place of name put inputAge to run it inside the ejs file of the server
  //   age: req.body.age       //in place of name put inputEmail to run it inside the ejs file of the server
  // },(err)=>{
  //   if(err) console.log(err);
  //   res.status(200).json({
  //     message:"Sucess"
  //   });
  //   // res.redirect('/');
  // });
  //#endregion
});


//Retrive the Data From the Server(Mongoose[MongoDb])
router.get('/retrive',(req,res,err)=>{
  // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  Crud.find((err,crud)=>{
    if(err) console.log(err);
    res.json(crud);
  });
    //#region Unused get Route Region
  // var allUsersArray=crud.find(); 
  // // console.log(allUsersArray.exec());
  // allUsersArray.exec((err, crud) =>{
  //   res.json(crud);
  //   });
//#endregion
  });


// EDIT User Listing
router.get('/edit/:id', (req, res, err) => {
  // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  var id = req.params.id 
  // console.log(id);
  Crud.findById(id, (err, crud) => {
    if(err) console.log(err);
    // console.log(JSON.stringify(crud));
    res.json(crud);
    // console.log(crud);
  });
});


/* Update users listing. */
router.post('/update/:id', function (req, res, err) { 
  // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  Crud.findById(req.params.id,(err,crud)=>{
    if(!crud) 
      return res.json(new Error("Document Not Found"));
    else{
      crud.name = req.body.name;
      crud.email = req.body.email;
      crud.age = req.body.age;
      crud.save()
        .then(crud =>{
          res.json("Updated Sucessfully"); 
        })
        .catch(err=>{
          res.status(400).send("Unable to Update the Database");
        });
    }
  });
      //#region Unused Routes 
      // res.send("Inside the user POST(/users/update) \n" + req.body.Email);
      // var up={
      //   name:req.body.name,       //Add Name in place of name to run it in ejs on the server
      //   email: req.body.email,    //Add Email in place of email to run it in ejs on the server
      //   age: req.body.age         //Add Age in place of age to run it in ejs on the server
      // };
      // Crud.findOneAndUpdate({ email: req.body.Email},up, (err) => {
      //   if (err) console.log("Updation Error. \n Email Not Found."+err);
      // });
      // res.redirect('/');
      //#endregion
});

/* DELETE (Delete) users listing. */
router.get('/delete/:id', (req, res, err) =>{
  // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  Crud.findByIdAndDelete({_id:req.params.id},(err,crud)=>{
    if(err) res.json({
      error:err,
      errorMessage:"Deletion Error"
    });
    res.json('User Deleted');
  });
      //#region  Unused
  // res.send("Inside the user DELETE(/users/delete) \n" + req.body.inputName);
  // res.redirect('/');
  //#endregion
});

module.exports = router;



// res.header 'Access-Control-Allow-Origin', '*'
// res.header 'Access-Control-Allow-Credentials', true
// res.header 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'
// res.header 'Access-Control-Allow-Headers', 'Content-Type'