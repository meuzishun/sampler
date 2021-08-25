import { Sound } from './sound.js';

class Sample {
    constructor(filepath, sampler) {
        this.filepath = filepath;
        this.audioCtx = sampler.audioCtx;
        this.samplerGain = sampler.samplerGain;
        this.loadFile();
    }

    async loadFile() {
        const response = await fetch(this.filepath);
        const arrayBuffer = await response.arrayBuffer();
        this.audioBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
    }

    play() {
        const sound = new Sound(this.audioBuffer, this.audioCtx, this.samplerGain);
        sound.play();
        return sound;
    }
}

export { Sample };