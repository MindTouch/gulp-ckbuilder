# gulp-ckbuilder

CKBuilder plugin for Gulp.

Usage
-----

```javascript
var ckbuilder = require('gulp-ckbuilder');
gulp.task('ckeditor', function() {
    var options = {
        overwrite: true,
        version: 'VER',
        revision: 'REV',
        buildConfig: '/path/to/build-config.js'
    };
    return gulp.src('')
        .pipe(ckbuilder('srcPath', 'destPath', options));
});
```
