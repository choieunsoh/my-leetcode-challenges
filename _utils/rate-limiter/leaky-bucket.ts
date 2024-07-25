class LeakyBucket {
  private capacity: number;
  private leakRate: number;
  private currentLoad: number;
  private lastLeakTime: number;

  constructor(capacity: number, leakRate: number) {
    this.capacity = capacity;
    this.leakRate = leakRate;
    this.currentLoad = 0;
    this.lastLeakTime = Date.now();
  }

  private leak() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - this.lastLeakTime) / 1000; // Convert to seconds
    const leakedAmount = elapsedTime * this.leakRate;

    this.currentLoad = Math.max(0, this.currentLoad - leakedAmount);
    this.lastLeakTime = currentTime;
  }

  allowRequest(): boolean {
    this.leak();

    if (this.currentLoad < this.capacity) {
      this.currentLoad += 1;
      return true;
    }

    return false;
  }
}

(async function () {
  const leakyBucket = new LeakyBucket(10, 1); // 10 requests capacity, 1 request per second leak rate
  for (let i = 0; i < 20; i++) {
    const delay = (Math.random() * 300) | 0;
    await run(i, delay);
  }

  async function run(i: number, delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (leakyBucket.allowRequest()) {
          console.log('Leaky Bucket: Request allowed', i, delay);
        } else {
          console.log('Leaky Bucket: Request rejected', i, delay);
        }
        resolve(0);
      }, delay);
    });
  }
})();
