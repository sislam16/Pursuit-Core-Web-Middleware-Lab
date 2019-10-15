const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 2300;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

const isAnimal = (req, res, next) => {
    let animal = req.query.animal
    console.log(animal)
    const registeredAnimals = ['lion','turtle','jellyfish','shark','penguin','cow','goat']
        if(registeredAnimals.includes(animal)){
            res.send({
                status: "success",
                message: true
            })
            return;
        } else {
            next();
        }
    }

const unavailableAnimal = (req, res, next) => {
    res.json({
        status: "Fail",
        message: false
    })
}
app.get('/animal', isAnimal, unavailableAnimal);

app.get('/random',);



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

