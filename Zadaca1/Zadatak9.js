
const objekt1 = {
    1: "asdgf",
    2: "afg"
}
    




const objekt2 = {
    3 : "aaaaa"


}


const objekt3 = {
    2 : "saf",
    1 : "eadgf"

}


const objekt4 = {

    3: "aaaaa"

}




function dvaobj (obj1, obj2){

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    
    return JSON.stringify(key1) === JSON.stringify(key2);

    
}

console.log(dvaobj(objekt1,objekt2));

