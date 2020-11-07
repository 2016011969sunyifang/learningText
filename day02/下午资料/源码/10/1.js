var express = require('express');

var app = express();

function middlewareA(req, res, next) {
    console.log('middlewareA before next()');
    const start = new Date()

    next();
    console.log('middlewareA after next()');
    const delta = new Date() - start;
    console.log(`请求耗时：${delta}ms`);

}

function middlewareB(req, res, next) {
    console.log('middlewareB before next()');

    next();
    console.log('middlewareB after next()');

}

function middlewareC(req, res, next) {
    console.log('middlewareC before next()');

    next();
    console.log('middlewareC after next()');

}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);
app.listen(3001, function () {
    console.log('listen 3001...');
});