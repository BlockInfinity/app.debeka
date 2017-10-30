const Docker = require('./lib/dockerbuild.js');
var gulp = require('gulp');

var docker = new Docker()
    .withImage('bc.ico.platform')
    .withGulp(gulp)
    .withBuildPath(['./*', './*/**', '!node_modules', '!node_modules/**', '!lib', '!lib/**'])
    .withFilesToPublish(gulp, ['./bc.ico.platform.app.yaml', './bc.ico.platform.svc.yaml'])
   	.withBuildNumber();
