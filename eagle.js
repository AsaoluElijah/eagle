// Code Written With <3 By Asaolu Elijah

const { exec } = require("child_process");
const fs = require("fs");

function randEmoji(){
	const emoji = ["🤹", "🤖", "🔰", "🤗", "🎉", "👌", "😎"].sort(function() {
						return .5 - Math.random();
					});
	return emoji[0];
}
function addCommit(){
	return exec("git add hello.txt && git commit -m 'Hola Mundo :heart: ' ", (error, stdout, stderr) => {
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
}
function createFile(){
	var emoji = randEmoji();
	// check if content exist
	fs.readFile('hello.txt', function(err, data) {
		if(data == emoji){
			emoji = randEmoji();
			fs.writeFile('hello.txt', emoji, function (err) {
				if (err) throw err;
				addCommit();
				console.log('Re-Saved!');
			});
		}else{
			fs.writeFile('hello.txt', emoji, function (err) {
				if (err) throw err;
				addCommit();
				console.log('Saved!');
			});
		}
	});
}
// Start Magic
setInterval(() => {
	createFile();
} , 2000)
