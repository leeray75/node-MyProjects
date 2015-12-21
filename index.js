var sys = require('sys');
var exec = require('child_process').exec;
var child;
var chokidar = require('chokidar');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

// One-liner for current directory, ignores .dotfiles
chokidar.watch('.\\source', {ignored: /[\/\\]\./}).on('all', (event, path) => {
  console.log(event, path);
  	if(path.indexOf("source\\scripts\\ts")>-1 && path.endsWith(".ts")>0){
		compileTypeScript(path);	
	}
});

function compileTypeScript(path){
	var outDir = path.replace("\\ts\\","\\js\\");
	console.log("path:",path);
	console.log("outDir:",outDir);
	outDir = outDir.substring(0,outDir.lastIndexOf("\\"));
	console.log("outDir:",outDir);
	child = exec("tsc --outDir " +outDir+ " " + path ,function(error, stdout,stderr){
	  console.log('stdout: ' + stdout);
	  console.log('stderr: ' + stderr);
	  if (error !== null) {
		console.log('exec error: ' + error);
	  }
	});
}

