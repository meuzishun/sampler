import { Sample } from './sample.js';

class Sampler {
    constructor() {
        this.audioCtx = new AudioContext();
        this.samplerGain = this.audioCtx.createGain();
        this.samplerGain.connect(this.audioCtx.destination);
        this.samples = {};
    }

    async addSample(name, filepath) {
        this.samples[name] = new Sample(filepath, this);
    }

    removeSample(name) {
        delete this.samples[name];
    }
}

export { Sampler };
