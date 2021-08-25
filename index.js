import { Sampler } from './audioModules/sampler.js';

// create a sampler
const pianoSampler = new Sampler();

for (let i = 0; i < 88; i++) {
    const num = 21 + i;
    pianoSampler.addSample(`midi-${num}`, `audio/${num}.mp3`);
}
// load in a sound
// pianoSampler.addSample('low-C', 'audio/24.mp3');

document.addEventListener('mousedown', () => {
    // when sample is played, the sound is returned...
    // const sound = pianoSampler.samples['low-C'].play();

    // pick a random number between 21 and 108
    const randomMidi = Math.floor((Math.random() * 24) + 84);
    const sound = pianoSampler.samples[`midi-${randomMidi}`].play();

    const randomDuration = Math.floor((Math.random() * 2000) + 125);

    // ...so an eventlistener can be added
    // document.addEventListener('mouseup', () => {
    //     sound.stop();
    //     console.log(pianoSampler);
    // });
    const countDown = setTimeout(() => {
        sound.stop();
    }, 3000);
});