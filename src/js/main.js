const runtime = require('offline-plugin/runtime');
runtime.install({
  onUpdateReady: () => {
    runtime.applyUpdate();
  },
  onUpdated: () => {
    window.location.reload();
  }
});
const {compress, determineOrientation} = require('jpegasus');

compressAndReportResults = async () => {
    const file = document.getElementById('imageInput').files[0];

    if (file) {
        setOriginalDetails(file);

        const maxHeight = parseFloat(getValue('maxHeightSelector'));
        const maxWidth = parseFloat(getValue('maxWidthSelector'));
        const scaleImageBy = parseFloat(getValue('scaleImageBy'));
        const quality = parseFloat(getValue('qualitySelector'));
        const returnOriginalIfCompressedFileIsLarger = 'true' === getValue('returnOriginalIfCompressedFileIsLargerSelector');
        const returnOriginalOnFailure = 'true' === getValue('returnOriginalOnFailureSelector');
        const fixImageOrientation = 'true' === getValue('fixImageOrientation');
        const compressedFile = await compress(file, {
            fixImageOrientation,
            maxHeight,
            maxWidth,
            quality,
            returnOriginalIfCompressedFileIsLarger,
            returnOriginalOnFailure,
            scaleImageBy
        });
        setCompressedDetails(compressedFile);
        setFileObjectUrl(compressedFile);
    }
};

const setOriginalDetails = async (file) => {
    console.info('originalFile:', file)
    document.getElementById('originalSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('originalType').innerHTML = file.type;
    const originalOrientation = await determineOrientation(file);
    document.getElementById('originalOrientation').innerHTML = originalOrientation;
};

const setCompressedDetails = async (file) => {
    console.info('compressedFile:', file)
    document.getElementById('compressedSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('compressedType').innerHTML = file.type;
    const compressedOrientation = await determineOrientation(file);
    document.getElementById('compressedOrientation').innerHTML = compressedOrientation;
};

const setFileObjectUrl = (compressedFile) => {
    const compressedImageSource = URL.createObjectURL(compressedFile);
    document.getElementById('compressedImageSpan').innerHTML = `<img id="compressedImage" src="${compressedImageSource}" />`;
};

const getValue = (field) => {
    return document.getElementById(field).value
};
