const Jpegasus = require('Jpegasus');

compress = function(file) {
    if (file) {
        document.getElementById('originalDetails').innerHTML = `{size: ${file.size}, type: ${file.type}}`;

        const quality = document.getElementById('qualitySelector').value;

        Jpegasus.compress(file, {
            maxHeight: 1000,
            maxWidth: 1000,
            quality: parseFloat(quality)
        }).then(function (compressedFile) {
            document.getElementById('compressedDetails').innerHTML = `{size: ${compressedFile.size}, type: ${compressedFile.type}}`;
            document.getElementById('compressedImg').src = URL.createObjectURL(compressedFile);
        });
    }
};

window.onload = function() {
    const minimumQuality = 1;
    const maxQuality = 100;
    const qualitySelector = document.getElementById('qualitySelector');

    for (let i = maxQuality; i >= minimumQuality; i--) {
        const option = document.createElement('option');
        const quality = parseFloat(i / 100).toFixed(2);

        option.text = quality;
        option.value = quality;

        qualitySelector.appendChild(option);
    }
};
