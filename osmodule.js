const os = require("os")
// console.log(os.arch());
console.log("Total RAM Memory : " + os.totalmem() / (1024 * 1024 * 1024) + " GB");
console.log("Occupied RAM Memory : " + (os.totalmem() / (1024 * 1024 * 1024) - (os.freemem() / (1024 * 1024 * 1024))) + " GB");
console.log("Free RAM Memory : " + os.freemem() / (1024 * 1024 * 1024) + " GB");
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());