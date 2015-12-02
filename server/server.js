var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport'),
	mongoose = require('mongoose'),
	mongoURI = 'mongodb://localhost:27017/leRetour',	
	port = 8765,
	app = express();

	
require('./passport')(passport); // pass passport for configuration	

//Policies
var isAuthed = function (req, res, next) {
    if(!req.isAuthenticated()) {
        return res.sendStatus(401);
    }
    return next();
}
	
//initiate controllers
var UserCtrl = require('./controllers/UserCtrl');
var EntryCtrl = require('./controllers/EntryCtrl');	


// required for passport
app.use(session({
    secret: 'best secret ever',
    resave: true,
    saveUninitialized: true

}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions	
	
	

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));



//auth
app.post('/registration', logout, passport.authenticate('local-signup'), function(req, res) {
    res.json(req.user);
})



app.post('/login', passport.authenticate('local-login'), function(req, res) {
	if(!req.user){
		res.redirect('/#/logIn');
	}
    res.json(req.user);
    // res.send(req.user); // redirect to the secure profile section
})


app.get('/users', UserCtrl.me);
// app.put
app.post('/users', UserCtrl.create);
// app.delete
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/#/signUp');
})



//journal entries
app.post('/entry', isAuthed, EntryCtrl.create);
app.get('/entry', isAuthed, EntryCtrl.read);
app.put('/entry/:id', isAuthed, EntryCtrl.update);
app.delete('/entry', isAuthed, EntryCtrl.delete);




mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
	console.log('Connected to Mongo at ' + mongoURI);
})	

app.listen(port, function(){
	console.log('listening on port ', port);	
})




// Custom middleware
function logout (req, res, next) {
    if (req.session || req.user) {
        req.logout();
    }
    next();
}


function isAuth(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.user){
        next();
    } else {
   	// if they aren't redirect them to the home page
    	res.status(403).send('not allowed');
    }
}

