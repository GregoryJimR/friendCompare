var path = require("path");

var htmlRoutes = function(app) {
    //path 1 - Get route to /survey.html
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    //path 2 - default to send to /home.html
    //so app.use is something else you want to use app.get here
    //and you want to do path.join like this ---> path.join(__dirname, "../path"); 
    //it will process all the argument it takes and give an absolute path when called
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};

module.exports = htmlRoutes;
