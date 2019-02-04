const Jpegasus = require('Jpegasus');

module.exports.compress = (file, quality) => {
    return Jpegasus.compress(file, {
        maxHeight: 1000,
        maxWidth: 1000,
        quality
    });
};
