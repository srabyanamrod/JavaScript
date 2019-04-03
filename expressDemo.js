var express  = require('express')
var app = express()

app.get('/',function(request,response){
    response.send('Merhaba')
})

app.get('/admin',function(request,response){
    response.send('Merhaba Admin')
})

app.get('/product',function(request,response){
    response.send('Merhaba Product')
})
var server =app.listen(8080);