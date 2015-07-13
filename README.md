# jquery.hash
jQuery DOM-element hashing plugin

## Supported hashing methods
 - base64
 - md5
 - sha1

## Compiling your owns
If you want to compile your own version or modification of jquery.hash

 1. `npm install`
 2. `node compile`
 3. Grab the `out/jquery.hash.min.js` file and plug it in!

## Examples

### DOM-elements

```javascript
$elem = $("#myBeautifulDiv");
hash_b64 = $elem.hash(); //same: $elem.hash({method: "base64"});
hash_sha1 = $elem.hash({method: "sha1"});
```

### Hashing strings

```javascript
var hashes = [];
hashes.push($.hashing.base64("Hello jQuery!")); // SGVsbG8galF1ZXJ5IQ==
hashes.push($.hashing.md5("Hello jQuery!")); // 9d1fd739fcb7ea5d78648cd7b0b3d4cf6f893de2 
hashes.push($.hashing.sha1("Hello jQuery!")); // db9c2df4a3eade3665a593b1f38dc163
```

### Adding more hashing methods

You can fork this project to add more, but you also wrie your extension without publishing.

 1. Create `$.hashing.METHOD_NAME` where METHOD_NAME is the name of the hashing method.
 2. Add the METHOD_NAME to the $.hashing.methods array.
 3. Your method should work with i.e. `$("#myBeautifulDiv").hash({method: "my_hashing"});`

## Future

 - More hashing methods