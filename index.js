const express = require('express')

const cors = require('cors')

const app = express()

PORT = process.env.PORT || 7000

const writeUp = 
    {
        "slackUsername" : "ucanthony" ,
        "backend" : true,
        "age" : 20,
        "bio" : "Hey, My name is Anthony. I am a backend dev currently focused on the MENT Stack (MongoDB, Expressjs, Nodejs, Typescript)."


    }


app.use (cors({
    origin : '*'
}))

app.get ("/", (req, res)=> {

    res.send (writeUp)

})

app.listen (PORT, () => {
    console.log (`listening on ${PORT}`)
})