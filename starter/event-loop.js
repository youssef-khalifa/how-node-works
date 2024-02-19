const fs = require("fs");
const crypto=require('crypto')
setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));
fs.readFile("test-file.txt", () => {
  console.log("i/o finished");
  console.log("------------------");
  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 3000);
  setImmediate(() => console.log("immediate 2 finished"));

  process.nextTick(() => console.log("process.nextTick "));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
  });
});
console.log("hello from top level code");
