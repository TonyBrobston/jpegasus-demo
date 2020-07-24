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
        const originalOrientation = await determineOrientation(file);
        setOriginalDetails(file, originalOrientation);

        const maxHeight = parseFloat(getValue('maxHeightSelector'));
        const maxWidth = parseFloat(getValue('maxWidthSelector'));
        const scaleImageBy = parseFloat(getValue('scaleImageBy'));
        const quality = parseFloat(getValue('qualitySelector'));
        const returnOriginalIfCompressedFileIsLarger =
          'true' === getValue('returnOriginalIfCompressedFileIsLargerSelector');
        const returnOriginalOnFailure =
          'true' === getValue('returnOriginalOnFailureSelector');
        const compressedFile = await compress(file, {
            maxHeight,
            maxWidth,
            quality,
            returnOriginalIfCompressedFileIsLarger,
            returnOriginalOnFailure,
            scaleImageBy
        });
        const compressedOrientation = await determineOrientation(compressedFile);
        setCompressedDetails(compressedFile, compressedOrientation);
        setFileObjectUrl(compressedFile);
    }
};

const setOriginalDetails = (file, originalOrientation) => {
    document.getElementById('originalSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('originalType').innerHTML = file.type;
    document.getElementById('originalOrientation').innerHTML = originalOrientation;
};

const setCompressedDetails = (file, compressedOrientation) => {
    document.getElementById('compressedSize').innerHTML = (file.size / 1024).toFixed(2);
    document.getElementById('compressedType').innerHTML = file.type;
    document.getElementById('compressedOrientation').innerHTML = compressedOrientation;
};

const setFileObjectUrl = (compressedFile) => {
    const compressedImageSource = URL.createObjectURL(compressedFile);
    document.getElementById('compressedImageSpan').innerHTML = `<img id="compressedImage" src="${compressedImageSource}" />`;
};

const getValue = (field) => {
    return document.getElementById(field).value
};
