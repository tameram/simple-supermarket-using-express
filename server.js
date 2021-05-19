const express = require('express')

const path = require('path')

const app = express()

const port = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.listen(port, function () {
    console.log("the server is running in " + port)
})
app.get('/', function (req, res) {
    res.send("Server is up and running smoothly")
})
app.get('/priceCheck/:name', function (req, res) {

    const indexOfParameter = store.findIndex(function (element, index) {
        if (element.name === req.params.name)
            return true;
    })
    const _price = (indexOfParameter === -1) ? null : store[indexOfParameter].price

    res.send({ price: _price })

})

app.get('/buy/:name' , function(req , res) {
    const indexOfParameter = store.findIndex(function (element, index) {
        if (element.name === req.params.name)
            return true;
    })
    const _inventory = (indexOfParameter === -1) ? null : store[indexOfParameter].inventory--
    
    res.send(store[indexOfParameter])
})

app.get('/sale' , function(req ,res){
    let param = req.query
    let resultofStoreDisscount = store.slice(0);
    if(param.admin === 'true'){

        resultofStoreDisscount = resultofStoreDisscount.filter(element => element.inventory > 10);
        resultofStoreDisscount.forEach(element => element.price /= 2)
       
    }
    res.send(resultofStoreDisscount)
})