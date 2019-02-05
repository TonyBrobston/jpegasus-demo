const jpegasus = require('jpegasus');

compressAndReportResults = async (file) => {
    if (file) {
        setOriginalDetails(`{size: ${file.size} bytes, type: ${file.type}}`);
        const maxHeight = parseFloat(getValue('maxHeightSelector'));
        const maxWidth = parseFloat(getValue('maxWidthSelector'));
        const quality = parseFloat(getValue('qualitySelector'));
        const start = new Date().getTime();

        const compressedFile = await jpegasus.compress(file, {
            maxHeight,
            maxWidth,
            quality
        });

        const end = new Date().getTime();
        const runTime = (end - start);
        setCompressedDetails(`{size: ${compressedFile.size} bytes, runTime: ${runTime} milliseconds, type: ${compressedFile.type}}`);
        setFileObjectUrl(compressedFile);
    }
};

setOriginalDetails = (originalDetails) => {
    document.getElementById('originalDetails').innerHTML = originalDetails;
};

setCompressedDetails = (compressedDetails) => {
    document.getElementById('compressedDetails').innerHTML = compressedDetails;
};

setFileObjectUrl = (compressedFile) => {
    document.getElementById('compressedImage').src = URL.createObjectURL(compressedFile);
};

getValue = (field) => {
    return document.getElementById(field).value
};

const fillMaxHeightSelectorOptions = () => {
    const maxHeightSelector = document.getElementById('maxHeightSelector');

    fillSelectorOptionsAndSetDefault(maxHeightSelector, {
        decreaseBy: 100,
        defaultValue: 1000,
        divideBy: 1,
        maximum: 10000,
        minimum: 1
    });
};

const fillMaxWidthSelectorOptions = () => {
    const maxHeightSelector = document.getElementById('maxWidthSelector');

    fillSelectorOptionsAndSetDefault(maxHeightSelector, {
        decreaseBy: 100,
        defaultValue: 1000,
        divideBy: 1,
        maximum: 10000,
        minimum: 1
    });
};

const fillQualitySelectorOptions = () => {
    const qualitySelector = document.getElementById('qualitySelector');

    fillSelectorOptionsAndSetDefault(qualitySelector, {
        decreaseBy: 1,
        defaultValue: 1,
        divideBy: 100,
        maximum: 100,
        minimum: 1
    });
};

const fillSelectorOptionsAndSetDefault = (selector, {decreaseBy, divideBy, minimum, maximum, defaultValue}) => {
    for (let iterator = maximum; iterator >= minimum; iterator = iterator - decreaseBy) {
        const option = document.createElement('option');
        const value = parseFloat(iterator / divideBy);

        option.text = value;
        option.value = value;

        selector.appendChild(option);
    }

    selector.value = defaultValue;
};

window.onload = () => {
    fillMaxHeightSelectorOptions();
    fillMaxWidthSelectorOptions();
    fillQualitySelectorOptions();
};
