var express = require('express')
,   app     = express()
,   engines = require('consolidate');// Templating library adapter for Express

app.engine('html', engines.nunjucks); //registering the template library
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.sendStatus(500);
    res.render('error_template', { error: err });
}

app.get('/:name', function(req, res, next) { //registering a route
    var name = req.params.name;
    var getvar1 = req.query.getvar1;
    var getvar2 = req.query.getvar2;
    res.render('hello', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
});

app.use(errorHandler);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});
