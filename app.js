var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var produtoRouter = require('./routes/produto');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', produtoRouter);
app.use('/tarefa-um', produtoRouter);
app.use('/tarefa-dois', produtoRouter);
app.use('/tarefa-tres', produtoRouter);
app.use('/tarefa-quatro', produtoRouter);
app.use('/tarefa-cinco', produtoRouter);
app.use('/tarefa-seis', produtoRouter);
app.use('/tarefa-sete', produtoRouter);
app.use('/tarefa-oito', produtoRouter);
app.use('/tarefa-nove', produtoRouter);
app.use('/tarefa-dez', produtoRouter);

module.exports = app;
