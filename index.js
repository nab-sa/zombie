const express = require('express');

const app = express();
const port = process.env.PORT || 4000

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', function() {

    console.log('Connected to MongoDB');
})

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/monsters');
}

app.use(express.urlencoded({ extended: true })); //Pass les infos dans le body


const Monster = require('./models/monster');


// const monsters = [
//     {id: 1 ,name: 'Albert', level: 5, description: 'La vipère'},
//     {id: 2 ,name: 'Sandra', level: 3, description: 'Le loup garou'},
//     {id: 3 ,name: 'Mounir', level: 2, description: 'La vampire'}
// ];

app.get('/', (req, res) => {
    Monster.find({}, (err, monsters) => {
        if (err) {
            console.log(err);
        } else {
            res.send(monsters);
        }
    })
})

app.post("/add", (req, res) => {
  let newMonster = new Monster(req.body);
  console.log(req.body);
  newMonster.save((error, monster) => {
    if (error) {
      console.log(error);
    } else {
      res.send(monster);
    }
  });
  // res.send('Ok');
});

app.get('/:id', (req, res) => {
    //mettre le code
    // let data = monsters.map(monster => monsters[monster.name]);
    // let data = monsters.map(monster => monster.id);
    res.send(`Voici le monstre: \n
    Id: ${monsters[req.params.id - 1].id}
    Name: ${monsters[req.params.id - 1].name}
    Level: ${monsters[req.params.id - 1].level}
    Desc: ${monsters[req.params.id - 1].description}
    `)
});

app.listen(port, () => "BattleCruiser Operationel Sir ! ");