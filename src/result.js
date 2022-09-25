export class Result {

    constructor () {
        this.time = 0;
        this.swap = 0;
        this.comparation = 0;
    }

    startTime() {
        this.time = this.getMiliseconds();
    }

    endTime() {
        this.time = Number((this.getMiliseconds() - this.time).toFixed(3));
    }

    incrementSwap() {
        this.swap++;
    }

    incrementComparation() {
        this.comparation++;
    }

    getMiliseconds() {
        return Number(performance.now().toFixed(3));
    }
}