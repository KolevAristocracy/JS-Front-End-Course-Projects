document.addEventListener('DOMContentLoaded', solve);

function solve() {
    encodeForm = document.querySelector('form#encode');
    decodeForm = document.querySelector('form#decode');

    encodeInput = encodeForm.querySelector('textarea');
    decodeOutput = decodeForm.querySelector('textarea');

    encodeForm.addEventListener('submit', encodeAndSentMessage);
    decodeForm.addEventListener('submit', decodeAndShowMessage);

    function encodeAndSentMessage(e) {
        e.preventDefault();

        let encodedMessage = '';
        const messageToEncode = encodeInput.value;

        encodeInput.value = '';
        
        for (const char of messageToEncode) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        };

        decodeOutput.value = encodedMessage;
    }

    function decodeAndShowMessage(e) {
        e.preventDefault();

        let decodedMessage = '';
        const messageToDecode = decodeOutput.value;

        for (const char of messageToDecode) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        };

        decodeOutput.value = decodedMessage;
    };
};