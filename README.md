# jquery.hash
jQuery DOM-element hashing plugin

## Supported hashing methods
 - base64
 - sha1

## Compiling
 1. `npm install`
 2. `node compile`
 3. Grab the `out/jquery.hash.min.js` file and plug in in!

## Example usage
```javascript
$elem = $("#myBeautifulDiv");
hash_b64 = $elem.hash(); //same: $elem.hash({method: "base64"});
hash_sha1 = $elem.hash({method: "sha1"});
```

## Future
 - More hashing methods
    - md5
 - Possibility to add own hashing methods