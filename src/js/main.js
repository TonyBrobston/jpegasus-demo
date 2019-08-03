require('offline-plugin/runtime').install();
const jpegasus = require('jpegasus');

compressAndReportResults = async () => {
    const file = document.getElementById('imageInput').files[0];

    if (file) {
        setOriginalDetails(file);
        const maxHeight = parseFloat(getValue('maxHeightSelector'));
        const maxWidth = parseFloat(getValue('maxWidthSelector'));
        const scaleImageBy = parseFloat(getValue('scaleImageBy'));
        const quality = parseFloat(getValue('qualitySelector'));

        const compressedFile = await jpegasus.compress(file, {
            maxHeight,
            maxWidth,
            quality,
            scaleImageBy
        });

        setCompressedDetails(compressedFile);
        setFileObjectUrl(compressedFile);
    }
};

const setOriginalDetails = (file) => {
    document.getElementById('originalSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('originType').innerHTML = file.type;
};

const setCompressedDetails = (file) => {
    document.getElementById('compressedSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('compressedType').innerHTML = file.type;
};

const setFileObjectUrl = (compressedFile) => {
    const compressedImageSource = URL.createObjectURL(compressedFile);
    document.getElementById('compressedImageSpan').innerHTML = `<img id="compressedImage" src="${compressedImageSource}" />`;
};

const getValue = (field) => {
    return document.getElementById(field).value
};
