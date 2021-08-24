class Sampler {
    constructor() {
        this.audioCtx = new AudioContext();
        this.samplerGain = this.audioCtx.createGain();
    }
}