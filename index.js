'use strict';
var through = require('through2');
var ckbuilder = require('node-ckbuilder');
var pluginName = 'gulp-ckbuilder';
module.exports = function(src, dest, opts) {
	if(!src) {
		return cb(new PluginError(pluginName,  'CKEditor sources path is required'));
	}
	if(!dest) {
		return cb(new PluginError(pluginName,  'CKEditor release destination path is required'));
	}
	Object.assign(ckbuilder.options, opts || {});
	var builder = ckbuilder.builder(src, dest);
	return through.obj(function(chunk, enc, cb) {
		try {
			builder.generateBuild();
			this.push(chunk);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-ckbuilder', err));
		}
		cb();
	});
};
