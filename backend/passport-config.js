const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt");


function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done)=>{
        const user = await getUserByEmail(email);
        if (user == null){
            return done(null, false, {message:"No user with that email"});
        }else{
            try{
                console.log("password: ", password);
                console.log("user password:", user.password);
                if (await bcrypt.compare(password, user.password)){
                    return done(null, user);
                }else{
                    return done(null, false,{message:"Password incorrect"});
                }
            }catch(error){
                done(error);
            }
        }
    }
    passport.use(new LocalStrategy({usernameField:"email"}, authenticateUser));
    // serialize user to use for session
    passport.serializeUser((user,done)=>{ done(null, user.id)});
    passport.deserializeUser(async(id, done)=>{
        try{
            user = await getUserById(id);
            return done(null, user)
        }catch(error){
            console.log("There was an error with deserializing");
            console.log(error);
        }
              
});

}
module.exports = initialize;