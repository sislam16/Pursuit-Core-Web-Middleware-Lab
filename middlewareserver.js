const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 2300;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

//question one backend
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

//question two
const validNumbers = (req, res, next) =>{
    let ceil = parseInt(req.query.ceil);
    let floor = parseInt(req.query.floor);

    if(isNan(ceil)||isNan(floor)){
        res.json({
            'status': 'Error ceil or floor is not a valid number'
        })
    } else if(floor >ceil){
        res.json({
            'status':'Error, floor is greater than ceil'
        })
    } else{
        next ();
    }
}

const pickRandomNumber = (req, res, next) =>{
    let ceil = parseInt(req.query.ceil);
    let floor = parseInt(req.query.floor);
    let arr = [];

    for(let i=floor; i <= ceil; i++){
        arr.push(i)
    }

    let randomIndex = Math.floor(Math.random()* arr.length)
console.log(arr)
res.json({
    status: 'success',
    range: [floor, ceil],
    randomPick:arr[randomIndex]
})
}

app.get('/random', validNumbers, pickRandomNumber);



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})