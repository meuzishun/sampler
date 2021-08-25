
class Sound {
    constructor(audioBuffer, audioCtx, samplerGain) {
        this.audioCtx = audioCtx;
        this.soundBuffer = audioCtx.createBufferSource();
        this.soundBuffer.buffer = audioBuffer;
        this.volume = audioCtx.createGain();
        this.volume.gain.value = 0;
        this.soundBuffer.connect(this.volume).connect(samplerGain);
    }

    play() {
        const now = this.audioCtx.currentTime;
        this.soundBuffer.start();
        this.volume.gain.setTargetAtTime(1, now, 0.01);
    }

    stop() {
        const now = this.audioCtx.currentTime;
        this.volume.gain.setTargetAtTime(0, now, 0.09);
        this.soundBuffer.stop(now + 1);
    }
}

export { Sound };