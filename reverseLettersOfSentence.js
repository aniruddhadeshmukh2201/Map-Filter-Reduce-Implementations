
function reverseString(s) {
    return s.split("").reverse().join("")
}

let str = "This is a javascript code";
let ans = [];
ans = str.split(" ")
console.log(ans.map(reverseString).reduce((acc, curr) => {
   return acc + " "+ curr 
}, ""));