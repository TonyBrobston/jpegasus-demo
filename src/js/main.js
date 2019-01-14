const Jpegasus = require('jpegasus');

compress = function(file) {
    console.log(file);
    Jpegasus.compress(file).then((compressedFile) => console.log(compressedFile));
};
