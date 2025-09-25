// 3582. Generate Tag for Video Caption
// https://leetcode.com/problems/generate-tag-for-video-caption/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption) {
  if (caption.trim().length === 0) return '#';

  const [firstWord, ...words] = caption.trim().split(/\s+/);
  let result = `#${firstWord.toLowerCase()}`;
  for (const word of words) {
    result += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  }
  return result.substring(0, 100);
};

var caption = 'Leetcode daily streak achieved';
var expected = '#leetcodeDailyStreakAchieved';
var result = generateTag(caption);
console.log(result, result === expected);

var caption = 'can I Go There';
var expected = '#canIGoThere';
var result = generateTag(caption);
console.log(result, result === expected);

var caption = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
var expected = '#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
var result = generateTag(caption);
console.log(result, result === expected);

var caption = 'Bold apple beyond bright future crash mountains glow light gently dance waits shore breeze mind ';
var expected = '#boldAppleBeyondBrightFutureCrashMountainsGlowLightGentlyDanceWaitsShoreBreezeMind';
var result = generateTag(caption);
console.log(result, result === expected);

var caption = '   ';
var expected = '#';
var result = generateTag(caption);
console.log(result, result === expected);
