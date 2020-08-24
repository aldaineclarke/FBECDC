
const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const bcrypt = require("bcrypt");
const adminRoute = express.Router();
const Student = require("../models/students");
const Admin = require("../models/admins")
const CalendarEvent = require("../models/events");
const passport = require("passport")
const initializePassport = require("../passport-config");



initializePassport(passport ,
    async (emailquery)=>{
        const user = await Admin.findOne({email:normalizeEmail(emailquery)});
        return user;
    }, 
    async (Idquery)=>{
        const user = await Admin.findOne({_id:Idquery});
        return user;
    }
);
adminRoute.use(flash());
adminRoute.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false

}));
adminRoute.use(passport.initialize());
adminRoute.use(passport.session())
adminRoute.get("/",checkAuthenticated, async (req, res)=>{
    events = await CalendarEvent.find().sort({start:"desc"});
    res.render("admin-home",{admin:req.user, events : events, page:" Dashboard"});
});
adminRoute.get("/register", checkAuthenticated,(req,res)=>{
    res.render("adminRegister");
})
adminRoute.post("/register", checkAuthenticated, async (req,res)=>{
    try{
        if(req.body.password === req.body.password2){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log(hashedPassword);

            let admin = new Admin({
                firstName : req.body.fname,
                lastName:req.body.lname,
                email: normalizeEmail(req.body.email),
                password:hashedPassword,
            });
            
            await admin.save();
            res.redirect("/admin");
        }else{
            res.redirect("/admin/register");
        }
        
    }
    catch(error){
        console.log(error);
    }
    

})
adminRoute.get("/login",(req,res)=>{
 
    res.render("login");
});
adminRoute.post("/login",passport.authenticate("local", {
    successRedirect:"/admin",
    failureRedirect: "/admin/login",
    failureFlash:true,
}));
adminRoute.get("/students",checkAuthenticated, async (req, res)=>{
    let students = await Student.find();
    res.render("allStudents", {students:students, admin:req.user, page:" All Students"});
});
adminRoute.get("/addEvent",checkAuthenticated, (req,res)=>{
    res.render("add_event",{admin:req.user, page:" Add Event"});
});
adminRoute.get("/events", async (req, res)=>{
    let events = await CalendarEvent.find().sort({start:"desc"});
    res.render("allEvents",{admin:req.user, events:events, page:" View Events"})
});
adminRoute.delete("/event/:id", async (req, res)=>{
    await CalendarEvent.findByIdAndDelete(req.params.id);
    res.redirect("/admin/events");
});
adminRoute.get("/event/edit/:id", async (req, res)=>{
   let event = await CalendarEvent.findById(req.params.id);
    res.render("editEvent",{admin:req.user, event:event, page:" View Events"});
});
adminRoute.put("/event/edit/:id", async (req, res, next)=>{
    req.event = await CalendarEvent.findById(req.params.id);
    next();
},saveEventAndRedirect("event/edit"));

adminRoute.post("/addEvent", (req, res, next)=>{
    req.event = new CalendarEvent;
    next()
    
},saveEventAndRedirect("addEvent"));
adminRoute.delete("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/admin/login");
})
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/admin/login");
    }
}

function normalizeEmail(email){
    return email.toLowerCase();
}
function saveEventAndRedirect(path){
 return async (req, res)=>{
    let event = req.event;
    event.title = req.body.title,
    event.start = req.body.start,
    event.description = req.body.description, 
    event.end = req.body.end
    
    try{
        await event.save();
        res.redirect(`/admin/`);
    }
    catch(error){
        console.log(error);
        res.redirect(`/admin/${path}`);
    }

 }
}

module.exports = adminRoute;