const fs = require("fs");

//! How to make out own promisified code to avoid callback
function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) reject(err);
      else resolve(content);
    });
  });
}

function writeFileWithPromise(filepath, actualContent, encoding) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, actualContent, encoding, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function unlinkFileWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// readFileWithPromise("hello.txt", "utf-8")
//   .then((content) => writeFileWithPromise("backup.txt", content))
//   .then(() => unlinkFileWithPromise("hello.txt"))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Code finished"));

function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function doTask() {
  try {
    const fileContent = await readFileWithPromise("hello.txt", "utf-8");
    await writeFileWithPromise("backup.txt", fileContent, "utf-8");
    await wait(10);
    await unlinkFileWithPromise("hello.txt");
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("All Done");
  }
}
doTask();
