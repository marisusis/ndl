require('require-json');

var winston = require('winston');
var program = require('commander');

program
	.version(require('../package.json').version)
	.usage('[options] <command>')
	.option('-v, --verbose', 'Enable verbose logging to console.', function() {
		winston.level = "verbose";
	});

program.parse(process.argv);
