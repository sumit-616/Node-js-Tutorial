const fs = require("fs");

// Sync call
// fs.writeFileSync('./test.txt', "Hey World");

// fs.writeFile('./test.txt', "Hello World Async", (err)=>{});

// const result = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(result)

// fs.readFile('./contacts.txt', "utf-8", (err, result)=>{
//   if(err){
//     console.log("error:",err);
//   }
//   else{
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", ` Today date is: ${new Date().getDate()} and current time is: ${new Date().getHours()}`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));

fs.mkdirSync("my-docs/a/b", {recursive: true}); 