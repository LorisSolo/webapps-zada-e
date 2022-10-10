let X;
y = true;
array = [];
let sum = 1;
function mnoz (X){
for (let i = 0; i<=1000; i++){
    if (X==i){
        y = true;
        break;
    }
    else {
        y = false;
    }
}
if (y == true){
    for (let j = 1; j<X;j++){
        if (j%7 == 0){
            array.push(j);
        }
    }
    
    for (let k = 0; k<array.length;k++){
        sum *= array[k];
    }
    console.log (X + " -> "+sum);
}
    
else {console.log ("ne")}
}

mnoz(23)