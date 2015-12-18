var sys = require('sys');
var exec = require('child_process').exec;
var child;
var chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfiles
chokidar.watch('.', {ignored: /[\/\\]\./}).on('all', (event, path) => {
  console.log(event, path);
  console.log("test");
  	if(path.endsWith(".ts")>0){
		compileTypeScript(path);	
	}
});

function compileTypeScript(path){
	
	child = exec("tsc --outDir ./node-MyProjects/js "+path ,function(error, stdout,stderr){
	  console.log('stdout: ' + stdout);
	  console.log('stderr: ' + stderr);
	  if (error !== null) {
		console.log('exec error: ' + error);
	  }
	});
}
