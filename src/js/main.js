const compressionHelper = require('./compressionHelper');

compressAndReportResults = async (file) => {
    if (file) {
        document.getElementById('originalDetails').innerHTML = `{size: ${file.size}, type: ${file.type}}`;

        const quality = parseFloat(document.getElementById('qualitySelector').value);

        const compressedFile = await compressionHelper.compress(file, quality);

        document.getElementById('compressedDetails').innerHTML = `{size: ${compressedFile.size}, type: ${compressedFile.type}}`;
        document.getElementById('compressedImg').src = URL.createObjectURL(compressedFile);
    }
};

fillQualitySelectorOptions = () => {
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

window.onload = () => {
    fillQualitySelectorOptions();
};
