const express = require("express")
const app = express()

app.get('/', (req,res)=>{
    console.log('Here')
    res.sendStatus(500)
    res.send('Hi')

})

app.listen(3000)