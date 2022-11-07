import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []

app.get ("/vratiObavijesti", (req,res)=>{
    var nazivDatum = []
    tempStorage.forEach(element => {
        nazivDatum.push({
            "naziv" : element.naziv,
            "Date" : element.Date
        }
            
        )
    });
    res.send(nazivDatum)
})

app.get("/vratiObavijest/:id", (req,res) =>{
    var { id } = req.params
   var obavijest = tempStorage.find( element => element.id = id)
    res.send({
        "naziv" : obavijest.naziv,
        "sadrzaj" : obavijest.sadrzaj,
        "timestamp" : obavijest.Date

    })
})

app.post("/dodajObavijest", (req,res) => {
       var data = req.body
       data.id = uuidv4()
       data.Date = new Date()
       console.log(data)
       tempStorage.push(data)
       res.send(data)
})

app.patch("/izmjeniObavijest/:id", (req, res) => {
    var { id } = req.params;

    var obavijest = tempStorage.find(element => element.id == id);

    var { sadrzaj } = req.body;
    obavijest.sadrzaj = sadrzaj;

    res.send(obavijest);
});

app.listen (3000, () => console.log(`Working on port ${port}`))