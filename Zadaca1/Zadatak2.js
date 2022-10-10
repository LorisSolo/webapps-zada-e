
let X;
let a = true;
function provjera (X){
for (let i = 100; i<=150000; i++){
    if (X == i){
        a = true;
        break;
    }
    else{
        a = false;
    }

 }

 if (a == true){
    console.log(X + "  je unutar [100,150000]");
 }
 else{
    console.log(X + " nije unutar [100,150000]");
 }
}

provjera(456456);
