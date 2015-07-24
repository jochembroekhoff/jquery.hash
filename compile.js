// Compile jQuery.hash
var ClosureCompiler = require("closurecompiler");
var fs = require('fs');
var archiver = require('archiver');
var mkdirp = require('mkdirp');

console.log("Compiling...");
ClosureCompiler.compile(
        ['src/jquery.hash.base64_md5_sha1.js', 'src/jquery.hash.js'],
        {
            compilation_level: "SIMPLE_OPTIMIZATIONS",
            externs: ["src/jquery-2.1.4.min.js"]
        },
function (error, result) {
    if (result) {
        console.log("Writing result...");
        result = "/*! jQuery Hashing plugin | By Jochem Broekhoff, at my birthday 2015 | me@jochembroekhoff.nl http://jochembroekhoff.nl/ | I don't care copyrights, but ask me before re-using or copying.*/\n" + result;
        mkdirp("out");
        fs.writeFile("out/jquery.hash.min.js", result, function (err) {
            if (err) {
                console.log("Error:");
                console.log(err);
            } else {
                console.log("Compiled files");
                console.log("Done! You can grab the out/jquery.hash.min.js file to use!");
            }
        });
    } else {
        console.log("Error:");
        console.log(error);
    }
}
);