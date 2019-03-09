"use strict";

const gulp = require("gulp");
const gulpTslint = require("gulp-tslint");
const tslint = require("tslint");
const del = require("del");
const exec = require("child_process").exec;
const spawn = require('child_process').spawn;
let node;

// task to compile typeScript to Javascript
function tsc(cb) {
    exec("./node_modules/.bin/tsc", (err, stdout, stderr) => {
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
        cb(err);
    });
}

// task to copy config files
function copyConf() {
    return gulp.src(["config/**", "!**/*.template"])
        .pipe(gulp.dest("build/config"));
}

function lint() {
    const program = tslint.Linter.createProgram("./tsconfig.json");
    return gulp.src(["src/**/*.ts"])
        .pipe(gulpTslint({
            program,
            reporter: "verbose"
        }))
        .pipe(gulpTslint.report());
}

function startService() {
    if (node) node.kill()
    node = spawn('node', ['build/src/app.js'], { stdio: 'inherit' })
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
}

gulp.task("clean", () => {
    return del(["build"]);
});

gulp.task("lint", gulp.series(lint));
gulp.task("copyConf", gulp.series(copyConf));
gulp.task("build", gulp.series("clean", "lint", gulp.parallel(tsc, copyConf)));

// set up a watcher to watch over changes
gulp.task("watch", () => {
    gulp.watch(["**/*.ts", "**/*.js", "!build/**", "!node_modules/**"], gulp.series("lint", tsc));
    gulp.watch(["config/**"], gulp.series("copyConf"));
    gulp.watch(["build/**"], gulp.series(startService))
});

gulp.task("default", gulp.series("build", gulp.parallel(startService, "watch")));