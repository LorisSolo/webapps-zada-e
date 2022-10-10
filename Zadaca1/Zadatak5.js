let array1 = [];
let arraytest = [];
array1 =[1,2,3,4,5,6,7,8,9];
array2 = [564,4,89,4]
function provjera(array){
    for (let i =0; i<array.length;i++){

        if (array[i]%3==0){
            arraytest.push(array[i]);
            
        }
    }
    
        console.log(array + " -> "  + " Brojevi dijeljivi s 3: " + arraytest.join(" "));

      
}


provjera(array1)