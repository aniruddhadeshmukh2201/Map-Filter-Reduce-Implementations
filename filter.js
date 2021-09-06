let arr = [2, 4, 6, 2, 8];

function isEven(i) {
    return i%2 == 0;
}

Array.prototype.filter1 = function(func) {
    let output = [];
    for(let i = 0; i < this.length; i++ ) {
        if(func(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

let out = arr.filter1(isEven);
console.log(out);