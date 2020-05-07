const { exec } = require("child_process");
exec("git add app.js && git commit -m 'Hola Mundo :heart: ' ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});