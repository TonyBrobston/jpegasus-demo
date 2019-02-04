const Jpegasus = require('Jpegasus');

const compress = (file, quality) => {
    return Jpegasus.compress(file, {
        maxHeight: 1000,
        maxWidth: 1000,
        quality
    });
};

module.exports = {
    compress
};
