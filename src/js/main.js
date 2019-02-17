const jpegasus = require('jpegasus');

compressAndReportResults = async () => {
    const file = document.getElementById('imageInput').files[0];

    if (file) {
        setOriginalDetails(file);
        const maxHeight = parseFloat(getValue('maxHeightSelector'));
        const maxWidth = parseFloat(getValue('maxWidthSelector'));
        const quality = parseFloat(getValue('qualitySelector'));
        // const start = new Date().getTime();

        const compressedFile = await jpegasus.compress(file, {
            maxHeight,
            maxWidth,
            quality
        });

        // const end = new Date().getTime();
        // const runTime = (end - start);
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
    document.getElementById('compressedImage').src = URL.createObjectURL(compressedFile);
};

const getValue = (field) => {
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
