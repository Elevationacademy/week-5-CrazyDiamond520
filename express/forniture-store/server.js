const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.listen(port,function(){
    console.log("server is up and running smoothly")
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/itemCheck/:name', function(req, res){
    const {name} = req.params
    const item = store.find(n => n.name == name)
    
    console.log(`price - ${item.price}`)
    res.send(`price - ${item.price}`)
})

app.get('/buy/:name', function(req, res){
    const {name} = req.params
    const index = store.findIndex(i => i.name == name)
    const item = store.find(i => i.name == name)
    const price = item.price
    store[index].inventory--
    const {inventory} = store[index]
    console.log(inventory)
    res.send(`congrajulations! you just bought ${name} for ${price}, and there are ${inventory} left. `)
})