let array = [3, 4, 5, 6];

function rsort(array) {
    let newArray = [];
    for (let i = array.length-1; i > -1; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(rsort(array));