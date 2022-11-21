import express, { json } from "express";
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from "uuid"

import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://Loris:L123456789@webapps-test.aascveo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("test");
const knjige = database.collection("Zadatak2");

const app = express();
const port = 5000
app.use(bodyParser.json())
const cursor = knjige.find()
const sve = await cursor.toArray()

app.get("/vratiAutore", async(req, res) => {

    let tempStorage = []
    
        sve.forEach(element => {
            tempStorage.push("naziv: " + element.naziv, "djela: " +element.djela)
        })

        
         res.send(tempStorage)


})


app.post("/dodajAutora", async (req, res) => {
    let error = false
    let autor = req.body
    let predugaDjela = []
    if (!autor.naziv || !autor.djela) {

        res.json({ msg: "krivi Kljucevi" })
        error = true

    }
    autor.djela.forEach(element => {
        if (element.length >20){
            res.json({ msg: `Djelo ${element} je predugo` })
            error = true
        }
        
    })

        if (!error) {
        autor.date = new Date()
        autor.id = uuidv4()
        database.collection("Zadatak2")
            .insertOne(autor)

            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.send(500).json({ err: "Error" })
            })
     
    }



})

app.delete("/izbrisiDjela/:djela", async (req, res) => {

    database.collection("Zadatak2")
        .updateMany({ djela: req.params.djela }, { $pull: { djela: req.params.djela } })


        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.send(500).json({ error: "Error" })
            console.log(update)

        })

})






app.listen(5000, () => console.log(`Example app listening on port ${port}`));
