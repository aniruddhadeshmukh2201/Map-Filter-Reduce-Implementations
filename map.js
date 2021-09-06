let arr = [2, 4, 6, 2, 8];

function area(radius){
    return 3.14*radius*radius;
}

Array.prototype.map1 = function(func) {
    let output = [];
    for(let i = 0; i< this.length; i++) {
        output.push(func(this[i]));
    }
    return output;
}

let output = arr.map1(area);
console.log(output);
