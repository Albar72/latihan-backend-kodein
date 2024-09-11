const pathFile = process.argv[2];

//validation
if (!pathFile) process.exit();

const fs = require("fs");

// console.log(process.argv);

const objbufferFile = fs.readFileSync(pathFile);

// console.log(objbufferFile.toString().split("\n"));

const arrFile = objbufferFile.toString().split("\n")
console.log(arrFile.length - 1);
