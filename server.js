if (process.env.DEBUG === "True"){
    require("dotenv").config()
}
"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Student = require("./models/students");
const CalendarEvent = require('./models/events')
const staticPath = path.join(__dirname +'/staticfiles');
const port = process.env.PORT || 5000;
const app = express();
const staticDirectory = express.static(staticPath);
const connectDB = require("./connection");
const adminRoute = require("./controlers/admin");
const methodOveride = require("method-override");
connectDB();
// const cssDirectory = express.static(cssPath);

// middlewares
app.use(bodyParser.urlencoded({ extended:true}));
app.use(methodOveride("_method"));
app.use(staticDirectory); //all static files directory
app.use('/admin', staticDirectory);

// set the template directorys
app.set("views", [path.join(__dirname,"/views"),
                  path.join(__dirname,"/views/event_views")
]);
app.use("/admin",adminRoute);
app.set('view engine', 'ejs'); // set the view engine to ejs



app.get('/', (req,res)=>{
    res.render('index');
});
app.get('/register', (req,res)=>{
    res.render('register');
});
app.get('/contact-us', (req,res)=>{
    res.render('contact-us');
});
app.get('/about-us', (req,res)=>{
    res.render('about-us');
});
app.get("/FAQ's", (req, res)=>{
    res.render("FAQ's");
});
app.get('/activities', async(req,res)=>{
    let events = await CalendarEvent.find();
    
    res.render("activities",{events:events});
});
app.get('/terms',(req,res)=>{
    res.render("termsAndConditions");
})
app.post('/contact-us', (req,res)=>{
    let name = req.body.name;
    let sender = req.body.email;
    let tel =req.body.tel;
    let msg = req.body.message;
    sendMessage(name,sender,msg);
    res.redirect('/');

});
app.post('/register', async (req,res)=>{
    console.log(req.body);
    const student = new Student({
       firstName : req.body.firstName,
       lastName:req.body.lastName,
       middleNAme:req.body.middleName,
       dateOfBirth: req.body.DOB,
       gender:req.body.gender,
       childAddress:req.body.addrLine1+",\n"+req.body.addrLine2+",\n"+ req.body.city+",\n"+req.body.parish,
       parentOrGuardian:req.body.guardianName,
       parentOrGuardianEmail: req.body.guardianEmail,
       parentOrGuardianAddress:req.body.guardianAddressLine1+",\n"+req.body.guardianAddressLine2+",\n"+ req.body.guardianAddressCity+",\n"+req.body.guardianAddressParish,
       parentOrGuardianTel:req.body.guardianTel1,
       parentOrGuardianTel2:req.body.guardianTel2,
       physician:req.body.physician,
       physicianAddress: req.body.physicianAddress,
       physicianOffice:req.body.physicianOffice,
       physicianTel: req.body.physicianTel,
       alergies:req.body.alergies,
       contact1: req.body.contact1Name,
       contact1Relation: req.body.contact1Relationship,
       contact1Address:req.body.contact1Address,
       contact1Tel: req.body.contact1Tel,
       contact2: req.body.contact2Name,
       contact2Relation: req.body.contact2Relationship,
       contact2Address:req.body.contact2Address,
       contact2Tel: req.body.contact2Tel,
    });
    try{
        await student.save();
    }catch(e){
        console.log(e);

    }
    res.redirect("/");
});


app.listen(port);
console.log("listening on port ", port);

const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUNDOMAIN;
const MAILGUNAPI = process.env.MAILGUNAPI;

const mg = mailgun({apiKey: MAILGUNAPI , domain: DOMAIN});
// const data = {
// 	from: 'Test <aldaineclarke1@gmail.com>',
// 	to: 'firstbornecdc@gmail.com',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
function sendMessage(name,sender='firstbornecdc@gmail.com',recipient='firstbornecdc@gmail.com',msg){
    let data = {
        from: sender,
        to: recipient,
        subject: 'Requesting Info',
        text: `${name},\n ${msg}`,
    }
    mg.messages().send(data,(error,body)=>{
        console.log(body.message);
    });
}
