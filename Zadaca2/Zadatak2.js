import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express();
const port = 5050;

app.use(bodyParser.json())

var tempStorage = []

app.get("/vratiAutore", (req, res) => {
    var nazivDjela = []
    tempStorage.forEach(element => {
        nazivDjela.push({
            "naziv" : element.naziv,
            "djela" : element.djela
        })
        
        
    });
    res.send(nazivDjela)
   
})

app.post("/dodajAutora", (req,res) =>{
    var data = req.body
    var testKljuc = {
        "naziv" : data.naziv,
        "djela" : data.djela
    }
    var glavniKljucStr =JSON.stringify(Object.keys(data)) 
    var testKljucStr = JSON.stringify(Object.keys(testKljuc))
    var test = JSON.stringify(data.djela)
   
    if (glavniKljucStr != testKljucStr){
        res.send("Krivi kljucevi");
    }else if(test.length-2 > 20){
        res.send("vise od 20")
        
    }else{
        data.Date = new Date()
        data.id = uuidv4()
        tempStorage.push(data)
    }

    app.delete("/izbrisiDjeloAutora/:id", (req, res) => {
        let { id } = req.params;
    
        let izbrisaniAutor = tempStorage.find(element => element.id == id);
    
        izbrisaniAutor.djela.pop();
    
        res.send(izbrisaniAutor);
    });
  
    

})


app.listen(5050, () => console.log(`Working on port ${port}`))