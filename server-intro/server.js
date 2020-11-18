const express = require('express')
const path = require('path')
const app = express()

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

const port = 3000
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))


app.get('/books/:bookID', function(request, response){
    let bookID = request.params.bookID
    response.send(bookID)
})

// app.get('/life', function(request, response){
//     console.log(41)
//     response.send(41)
// })