
compress = function(file) {
    console.log(file);
    require('jpegasus').compress(file).then(function (compressedFile) {
        console.log(compressedFile);
    });
};
