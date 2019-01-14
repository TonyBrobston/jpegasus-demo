const Jpegasus = require('jpegasus');

compress = async function(file) {
    console.log(file);
    console.log(await Jpegasus.compress(file));
};
