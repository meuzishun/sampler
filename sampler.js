class Sampler {
    constructor() {
        this.audioCtx = new AudioContext();
        this.samplerGain = this.audioCtx.createGain();
        this.samplerGain.connect(this.audioCtx.destination);
        this.samples = {};
    }

    async addSample(filepath, audioContext) {
        const buffer = this.audioCtx.createBufferSource();
        const response = await fetch(filepath);
        const arrayBuffer = await response.arrayBuffer();
        buffer.buffer = await this.audioCtx.decodeAudioData(arrayBuffer);
        this.samples[filepath] = buffer;
    }

    removeSample() {}

    playSample(sample) {
        const now = this.audioCtx.currentTime;

        const volume = this.audioCtx.createGain();
        sample.connect(volume).connect(this.samplerGain);
        volume.gain.value = 0;

        sample.start();
        volume.gain.setTargetAtTime(1, now, 0.01);
    }

    stopSample() {} 
}

const mySampler = new Sampler();
console.log(mySampler);

