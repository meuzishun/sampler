class Sampler {
    constructor() {
        this.audioCtx = new AudioContext();
        this.samplerGain = this.audioCtx.createGain();
        this.samples = {};
    }

    async addSample(filepath) {
        const buffer = this.audioCtx.createBufferSource();
        const response = await fetch(filepath);
        const arrayBuffer = await response.arrayBuffer();
        buffer.buffer = await audioContext.decodeAudioData(arrayBuffer);
        this.samples.filepath = buffer;
    }

    removeSample() {}

    playSample() {}

    stopSample() {} 
}

const mySampler = new Sampler();
console.log(mySampler);

