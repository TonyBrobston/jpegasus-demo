const Jpegasus = require('Jpegasus');

compress = function(file) {
    document.getElementById('originalDetails').innerHTML = `{size: ${file.size}, type: ${file.type}}`;
    Jpegasus.compress(file, {
        maxHeight: 1000,
        maxWidth: 1000
    }).then(function (compressedFile) {
        document.getElementById('compressedDetails').innerHTML = `{size: ${compressedFile.size}, type: ${compressedFile.type}}`;
        document.getElementById('compressedImg').src = URL.createObjectURL(compressedFile);
    });
};
