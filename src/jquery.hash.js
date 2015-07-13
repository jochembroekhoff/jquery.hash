/*!
 jQuery Hashing plugin v1
 
 Easy hash HTML elements.
 Currently supporting this hashing methods:
 - base64
 - sha1
 
 By Jochem Broekhoff, at my birthday 2015.
 me@jochembroekhoff.nl
 http://jochembroekhoff.nl/
 
 I don't care copyrights, but ask me before re-using or copying.
 */
(function ($) {
    $.fn.hash = function (options) {
        var opts = $.extend({
            method: "base64"
        }, options);

        var $elem = $(this);
        var tags = ["input", "textarea"];
        var tagName = $elem.prop("tagName");
        if (typeof tagName !== "undefined") {
            tagName = tagName.toLowerCase();
        }
        var found = $.inArray(tagName, tags) > -1;
        var elemValue = $elem.html();
        if (found) {
            elemValue = $elem.val();
        }

        if($.inArray(opts.method, $.hashing.methods) !== -1) {
            return $.hashing[opts.method](elemValue);
        } else {
            return "Method " + opts.method + " not supported!";
        }
    };
}(jQuery));