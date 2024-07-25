class FixedWindow {
  private windowSize: number;
  private requestLimit: number;
  private requests: number;
  private windowStart: number;

  constructor(windowSize: number, requestLimit: number) {
    this.windowSize = windowSize;
    this.requestLimit = requestLimit;
    this.requests = 0;
    this.windowStart = Date.now();
  }

  allowRequest(): boolean {
    const currentTime = Date.now();

    if (currentTime - this.windowStart >= this.windowSize) {
      // Reset window
      this.windowStart = currentTime;
      this.requests = 0;
    }

    if (this.requests < this.requestLimit) {
      this.requests++;
      return true;
    }

    return false;
  }
}

(async function () {
  const fixedWindow = new FixedWindow(1000, 5); // 1 second window, 5 requests per window
  for (let i = 0; i < 20; i++) {
    const delay = (Math.random() * 300) | 0;
    await run(i, delay);
  }

  async function run(i: number, delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (fixedWindow.allowRequest()) {
          console.log('Fixed Window: Request allowed', i, delay);
        } else {
          console.log('Fixed Window: Request rejected', i, delay);
        }
        resolve(0);
      }, delay);
    });
  }
})();
