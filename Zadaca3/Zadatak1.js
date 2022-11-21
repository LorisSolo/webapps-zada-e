import express from "express";
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from "uuid"

import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://Loris:L123456789@webapps-test.aascveo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("test");
const obavijesti = database.collection("collection1");

const app = express();
const port = 3000

app.use(bodyParser.json())

const cursor = obavijesti.find()
const sve = await cursor.toArray()


app.get("/vratiObavijesti", async(req, res) => {

  
    let tempStorage = []


    sve.forEach(element => {
      tempStorage.push("naziv: " + element.naziv, "sadrzaj: " + element.sadrzaj)
    })

    res.send(tempStorage)
  

})

app.get("/vratiObavijest/:naziv", (req, res) => {
  let tempStorage = []
  let { naziv } = req.params
  let filter = sve.find(x => x.naziv === naziv)
  tempStorage.push( "naziv: " + filter.naziv,"sadrzaj: " + filter.sadrzaj, "timestamp: " +filter.date)
  res.send(tempStorage)

})

app.post("/dodajObavijest", (req, res) => {
  let obavijest = req.body

  if (obavijest.naziv && obavijest.sadrzaj && Object.keys(obavijest).length <= 5) {
    obavijest.id = uuidv4()
    obavijest.date = new Date()
    database.collection("collection1")
      .insertOne(obavijest)
      .then(result => {
        res.status(201).json(result)
      })
      .catch(error => {
        res.send(500).json({ error: "Error" })
      })
    console.log(obavijest)
  } else {
    res.send("error")

  }

})

app.patch("/izmijeniSadrzaj/:id", (req, res) => {

  let update = req.body
  database.collection("collection1")
    .updateOne({ id: (req.params.id) }, { $set: update })

    .then(result => {
      res.status(201).json(result)
    })
    .catch(error => {
      res.send(500).json({ error: "Error" })
      console.log(update)

    })
})




app.listen(3000, () => console.log(`Example app listening on port ${port}`));