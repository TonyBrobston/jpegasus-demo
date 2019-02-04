const jpegasus = require('Jpegasus');

const compress = (file, quality) => {
    return jpegasus.compress(file, {
        maxHeight: 1000,
        maxWidth: 1000,
        quality
    });
};

module.exports = {
    compress
};
