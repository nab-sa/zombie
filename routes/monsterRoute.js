const monsterRouter = require("express").Router();

const Monster = require("../models/monster");
monsterRouter.get("/", (req, res) => {
  Monster.find({}, (err, monsters) => {
    if (err) {
      console.log(err);
    } else {
      res.send(monsters);
    }
  });
});

monsterRouter.post("/add", (req, res) => {
  let newMonster = new Monster(req.body);
  console.log(req.body);
  newMonster.save((error, monster) => {
    if (error) {
      console.log(error);
    } else {
      res.send(monster);
    }
  });
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

module.exports = monsterRouter;
