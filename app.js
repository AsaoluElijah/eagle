const { exec } = require("child_process");
const fs = require("fs");

let commitCount = 0;

const startMagic = () => {
  let fileContent = fs.readFileSync("a.txt");

  if (fileContent == "Привет") {
    fs.writeFileSync("a.txt", "до свидания");
  } else {
    fs.writeFileSync("a.txt", "Привет");
  }

  exec(
    "git add a.txt && git commit -m 'Привет мир' ",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      // console.log(`stdout: ${stdout}`);
      commitCount++;
    }
  );
  console.log(commitCount);
};

setInterval(startMagic, 1000);
