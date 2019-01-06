const Jpegasus = require('jpegasus');

compress = async function(event) {
    let file = event.target.files[0];
    console.log(file);
    console.log(await Jpegasus.default.compress(file));
};
