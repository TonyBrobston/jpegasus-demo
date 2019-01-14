const Jpegasus = require('jpegasus');

compress = function(file) {
    console.log(file);
    Jpegasus.compress(file).then(function (compressedFile) {
        console.log(compressedFile);
    });
};
