class SlidingWindowLog {
  private windowSize: number;
  private requestLimit: number;
  private requestTimestamps: number[];

  constructor(windowSize: number, requestLimit: number) {
    this.windowSize = windowSize;
    this.requestLimit = requestLimit;
    this.requestTimestamps = [];
  }

  allowRequest(): boolean {
    const currentTime = Date.now();
    this.requestTimestamps = this.requestTimestamps.filter((timestamp) => currentTime - timestamp <= this.windowSize);

    if (this.requestTimestamps.length < this.requestLimit) {
      this.requestTimestamps.push(currentTime);
      return true;
    }

    return false;
  }
}

(async function () {
  const slidingWindowLog = new SlidingWindowLog(1000, 5); // 1 second window, 5 requests per window
  for (let i = 0; i < 20; i++) {
    const delay = (Math.random() * 300) | 0;
    await run(i, delay);
  }

  async function run(i: number, delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (slidingWindowLog.allowRequest()) {
          console.log('Sliding Window Log: Request allowed', i, delay);
        } else {
          console.log('Sliding Window Log: Request rejected', i, delay);
        }
        resolve(0);
      }, delay);
    });
  }
})();
