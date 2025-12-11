const path = require("path");
const fs = require("fs").promises;

 
function logCurrentFile() {
  console.log("File:", __filename);
  console.log("Dir :", __dirname);
}

// 2) 
function getFileName(filePath) {
  return path.basename(filePath);
}

// 3) 
function buildPath(obj) {
  return path.join(obj.dir, obj.name + obj.ext);
}

// 4)
function getExt(filePath) {
  return path.extname(filePath);
}

// 5) 
function parseNameAndExt(filePath) {
  return {
    name: path.basename(filePath, path.extname(filePath)),
    ext: path.extname(filePath),
  };
}

// 6)
function isAbsolute(filePath) {
  return path.isAbsolute(filePath);
}

// 7) 
function joinMany(...parts) {
  return path.join(...parts);
}

// 8)
function resolvePath(relativePath) {
  return path.resolve(relativePath);
}

// 9) 
function joinTwo(a, b) {
  return path.join(a, b);
}
//10
async function deleteFile(filePath) {
  await fs.unlink(filePath);
  return "The file.txt is deleted.";
}
//11
const fs = require("fs");

function makeFolder(name) {
  fs.mkdirSync(name);
  return "Success";
}

console.log(makeFolder("testFolder"));
//12
const EventEmitter = require("events");
const e = new EventEmitter();

e.on("start", () => {
  console.log("Welcome event triggered!");
});

e.emit("start");
//13
const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.on("login", (user) => {
  console.log("User logged in:", user);
});

myEvent.emit("login", "Ahmed");
//14
const fs = require("fs");

function readSync(p) {
  let data = fs.readFileSync(p, "utf8");
  console.log("the file content =>", data);
}

readSync("./notes.txt");
//15
const fs = require("fs");

function writeAsync(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) console.log("Error");
    else console.log("Async save");
  });
}

writeAsync("./async.txt", "Async save");
//16
const fs = require("fs");

function checkDir(p) {
  return fs.existsSync(p);
}

console.log(checkDir("./notes.txt"));

//17
const os = require("os");

function getInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}

console.log(getInfo());