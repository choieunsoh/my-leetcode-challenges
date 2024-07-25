class TokenBucket {
  private capacity: number;
  private refillRate: number;
  private tokens: number;
  private lastRefillTime: number;

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.tokens = capacity;
    this.lastRefillTime = Date.now();
  }

  private refill() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - this.lastRefillTime) / 1000; // Convert to seconds
    const addedTokens = elapsedTime * this.refillRate;

    this.tokens = Math.min(this.capacity, this.tokens + addedTokens);
    this.lastRefillTime = currentTime;
  }

  allowRequest(): boolean {
    this.refill();

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }

    return false;
  }
}

(async function () {
  const tokenBucket = new TokenBucket(10, 1); // 10 tokens capacity, 1 token per second refill rate
  for (let i = 0; i < 20; i++) {
    const delay = (Math.random() * 300) | 0;
    await run(i, delay);
  }

  async function run(i: number, delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (tokenBucket.allowRequest()) {
          console.log('Token Bucket: Request allowed', i, delay);
        } else {
          console.log('Token Bucket: Request rejected', i, delay);
        }
        resolve(0);
      }, delay);
    });
  }
})();
