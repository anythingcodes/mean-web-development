exports.render = function(req, res) {

    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', { // views path set in config/express.js
        title: 'Hello World'
    })
};