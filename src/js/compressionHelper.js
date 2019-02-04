const jpegasus = require('Jpegasus');

const compress = (file, maxHeight, maxWidth, quality) => {
    return jpegasus.compress(file, {
        maxHeight,
        maxWidth,
        quality
    });
};

module.exports = {
    compress
};
