import {
    showMeWeather
} from './showMeWeather.js';
let recognition = null;
export const speakToSearch = () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    var txtInput = document.querySelector('#search-bar');

    try {
        recognition.addEventListener('result', e => {
            // console.log(e.results);
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            txtInput.value = transcript;
            // console.log(transcript);
            if (e.results[0].isFinal) {
                let unitType = document.querySelector('.unit-type.active').dataset.type;
                showMeWeather.bind(this, unitType)();
            }
        })
        // recognition.addEventListener('end', recognition.stop);
        // recognition.addEventListener('end', recognition.start);
        recognition.start();
    } catch (err) {
        console.error(err);
    }
}

export const stopSpeechRecognition = () => {
    recognition.addEventListener('end', recognition.stop);
    recognition.stop();
    window.SpeechRecognition = null;
    // console.log('odpalam');
}