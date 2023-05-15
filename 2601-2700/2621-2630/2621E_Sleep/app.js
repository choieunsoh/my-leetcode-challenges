// 2621. Sleep
// https://leetcode.com/problems/sleep/
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
