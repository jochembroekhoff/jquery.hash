// Compile jQuery.hash
var ClosureCompiler = require("closurecompiler");
var fs = require('fs');
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
        result = "/*!\
 jQuery Hashing plugin v1\n\
 \n\
 Easy hash HTML elements.\n\
 Currently supporting this hashing methods:\n\
 - base64\n\
 - sha1\n\
 \n\
 By Jochem Broekhoff, at my birthday 2015.\n\
 me@jochembroekhoff.nl\n\
 http://jochembroekhoff.nl/\n\
 \n\
 I don't care copyrights, but ask me before re-using or copying.\n\
 */\n" + result;
        mkdirp("out");
        fs.writeFile("out/jquery.hash.min.js", result, function (err) {
            if (err) {
                console.log("Error:");
                console.log(err);
            } else {
                console.log("Done");
            }
        });
    } else {
        console.log("Error:");
        console.log(error);
    }
}
);