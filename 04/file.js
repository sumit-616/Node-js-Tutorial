const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

console.log("Output 1.");
// Blocking
// const result = fs.readFileSync("./fourth.txt", "utf-8");

//Non-Blocking
fs.readFile("./fourth.txt", "utf-8", (err, result)=>{
  if(err){
    console.log("Not able to read file:fourth.txt");
  }
  else{
    console.log(result);
  }
})
// console.log(result);
console.log("output 2.");
console.log("output 3.");
console.log("output 4.");


// Default Thread Pool Size = 4
// Max? -8core cpu -> 8 thread max