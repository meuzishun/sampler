import { Sampler } from './audioModules/sampler.js';

// create a sampler
const pianoSampler = new Sampler();

// load in a sound
pianoSampler.addSample('midi-48', 'audio/48.mp3');

// Loop for many sounds...
// for (let i = 0; i < 88; i++) {
//     const num = 21 + i;
//     pianoSampler.addSample(`midi-${num}`, `audio/${num}.mp3`);
// }

document.addEventListener('mousedown', () => {
    // when sample is played, the sound is returned...
    const sound = pianoSampler.samples['midi-48'].play();

    // ...so an eventlistener can be added
    document.addEventListener('mouseup', () => {
        sound.stop();
    });

    // ...or stopped with a timer
    const countDown = setTimeout(() => {
        sound.stop();
    }, 3000);
});