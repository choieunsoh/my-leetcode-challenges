// 1092. Shortest Common Supersequence
// https://leetcode.com/problems/shortest-common-supersequence/description/
// T.C.: O(n*m)
// S.C.: O(m*m)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;

  const dp = Array.from({ length: str1Length + 1 }, () => new Array(str2Length + 1).fill(0));

  // Initialize the base cases
  // When str2 is empty, the supersequence is str1 itself (length = row index)
  for (let row = 0; row <= str1Length; row++) {
    dp[row][0] = row;
  }
  // When str1 is empty, the supersequence is str2 itself (length = col index)
  for (let col = 0; col <= str2Length; col++) {
    dp[0][col] = col;
  }

  // Fill the DP table
  for (let row = 1; row <= str1Length; row++) {
    for (let col = 1; col <= str2Length; col++) {
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        // If characters match, inherit the length from the diagonal +1
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        // If characters do not match, take the minimum length option +1
        dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1]) + 1;
      }
    }
  }

  const supersequence = [];
  let row = str1Length;
  let col = str2Length;
  while (row > 0 && col > 0) {
    if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
      // If characters match, take it from diagonal
      supersequence.push(str1.charAt(row - 1));
      row--;
      col--;
    } else if (dp[row - 1][col] < dp[row][col - 1]) {
      // If str1’s character is part of the supersequence, move up
      supersequence.push(str1.charAt(row - 1));
      row--;
    } else {
      // If str2’s character is part of the supersequence, move left
      supersequence.push(str2.charAt(col - 1));
      col--;
    }
  }

  // Append any remaining characters
  // If there are leftover characters in str1
  while (row > 0) {
    supersequence.push(str1.charAt(row - 1));
    row--;
  }

  // If there are leftover characters in str2
  while (col > 0) {
    supersequence.push(str2.charAt(col - 1));
    col--;
  }

  // Reverse the built sequence to get the correct order
  return supersequence.reverse().join('');
};

var str1 = 'abac',
  str2 = 'cab';
var expected = 'cabac';
var result = shortestCommonSupersequence(str1, str2);
console.log(result, result === expected);

var str1 = 'aaaaaaaa',
  str2 = 'aaaaaaaa';
var expected = 'aaaaaaaa';
var result = shortestCommonSupersequence(str1, str2);
console.log(result, result === expected);

var str1 =
    'atdznrqfwlfbcqkezrltzyeqvqemikzgghxkzenhtapwrmrovwtpzzsyiwongllqmvptwammerobtgmkpowndejvbuwbporfyroknrjoekdgqqlgzxiisweeegxajqlradgcciavbpgqjzwtdetmtallzyukdztoxysggrqkliixnagwzmassthjecvfzmyonglocmvjnxkcwqqvgrzpsswnigjthtkuawirecfuzrbifgwolpnhcapzxwmfhvpfmqapdxgmddsdlhteugqoyepbztspgojbrmpjmwmhnldunskpvwprzrudbmtwdvgyghgprqcdgqjjbyfsujnnssfqvjhnvcotynidziswpzhkdszbblustoxwtlhkowpatbypvkmajumsxqqunlxxvfezayrolwezfzfyzmmneepwshpemynwzyunsxgjflnqmfghsvwpknqhclhrlmnrljwabwpxomwhuhffpfinhnairblcayygghzqmotwrywqayvvgohmujneqlzurxcpnwdipldofyvfdurbsoxdurlofkqnrjomszjimrxbqzyazakkizojwkuzcacnbdifesoiesmkbyffcxhqgqyhwyubtsrqarqagogrnaxuzyggknksrfdrmnoxrctntngdxxechxrsbyhtlbmzgmcqopyixdomhnmvnsafphpkdgndcscbwyhueytaeodlhlzczmpqqmnilliydwtxtpedbncvsqauopbvygqdtcwehffagxmyoalogetacehnbfxlqhklvxfzmrjqofaesvuzfczeuqegwpcmahhpzodsmpvrvkzxxtsdsxwixiraphjlqawxinlwfspdlscdswtgjpoiixbvmpzilxrnpdvigpccnngxmlzoentslzyjjpkxemyiemoluhqifyonbnizcjrlmuylezdkkztcphlmwhnkdguhelqzjgvjtrzofmtpuhifoqnokonhqtzxmimp',
  str2 =
    'xjtuwbmvsdeogmnzorndhmjoqnqjnhmfueifqwleggctttilmfokpgotfykyzdhfafiervrsyuiseumzmymtvsdsowmovagekhevyqhifwevpepgmyhnagjtsciaecswebcuvxoavfgejqrxuvnhvkmolclecqsnsrjmxyokbkesaugbydfsupuqanetgunlqmundxvduqmzidatemaqmzzzfjpgmhyoktbdgpgbmjkhmfjtsxjqbfspedhzrxavhngtnuykpapwluameeqlutkyzyeffmqdsjyklmrxtioawcrvmsthbebdqqrpphncthosljfaeidboyekxezqtzlizqcvvxehrcskstshupglzgmbretpyehtavxegmbtznhpbczdjlzibnouxlxkeiedzoohoxhnhzqqaxdwetyudhyqvdhrggrszqeqkqqnunxqyyagyoptfkolieayokryidtctemtesuhbzczzvhlbbhnufjjocporuzuevofbuevuxhgexmckifntngaohfwqdakyobcooubdvypxjjxeugzdmapyamuwqtnqspsznyszhwqdqjxsmhdlkwkvlkdbjngvdmhvbllqqlcemkqxxdlldcfthjdqkyjrrjqqqpnmmelrwhtyugieuppqqtwychtpjmloxsckhzyitomjzypisxzztdwxhddvtvpleqdwamfnhhkszsfgfcdvakyqmmusdvihobdktesudmgmuaoovskvcapucntotdqxkrovzrtrrfvoczkfexwxujizcfiqflpbuuoyfuoovypstrtrxjuuecpjimbutnvqtiqvesaxrvzyxcwslttrgknbdcvvtkfqfzwudspeposxrfkkeqmdvlpazzjnywxjyaquirqpinaennweuobqvxnomuejansapnsrqivcateqngychblywxtdwntancarldwnloqyywrxrganyehkglbdeyshpodpmdchbcc';
var expected =
  'axjtuwbmvsdzeogmnzorndhmjoqnqjnhmfwlueifbcqkezrwltzyeqvqemggctttilmfokzgpghxotfykyzendhtfapwrmfierovwtpzzrsyuiwongllqseumvpzmymtvsdsowammerobtvagmekpowndhejvbuwbporfyroknrjoekdgqqlgzxihisfweevpepgxajqlrmyhnadgcjtsciavbpgqjzecswtdetmtallzybcukdztovxysgoavfgrejqkliirxuvnagwzmassthjecvfzkmyonglocmvjnxklecwqqvgrzpsswnigsrjthtmxyokuawirbkecfsauzrgbiydfsupuqanetgwounlpqmunhcapzdxwmfhvpfmduqmzidatemaqmzzzfjpdxgmddsdlhyokteubdgqoyepgbzmjkhmfjtspgoxjqbrmfspjmwmedhzrxavhnldugtnsuykpvwaprzrwludbameeqlutwdvgkyghgprqcdgqjjbzyefsujnnssfmqvjhnvcotynidziswpzhjykdszbblustomrxwtlhkiowpatbypwcrvkmajumsxthbebdqqurpphncthoslxxvjfezayreidbolwyekxezfqtzfylizmmneqcvvxepwhrcskstshpemynwzyunsxpgjflnqmfzgmbretpyehstavwpkxegmbtznqhpbclhrzdjlmzibnrouxljwabwpxkeiedzomwhuohffpfinoxhnairblcayygghzqmotwrywqayvvgohmujneqlzurxcpnwdiplwetyudofhyqvfduhrbsoxduggrlofszqeqkqqnrjomszjimrunxbqzyazyakgyoptfkolizeayojwkryidtctemtesuhbzcacnzzvhlbdibhnufjjocporuzuesvoifbuesvuxhgexmckbyfifcxhqntngqyaohfwyubtsrqarqdagkyogrnaxbcoouzbdvygpxjjxeugknksrfzdrmnoxrcapyamuwqtntqspszngdxxecyszhwqdqjxrsbymhtdlkwkvlkdbmzjngvdmhvbllqqlcemkqopyixxdomhnmvnsalldcfpthpkjdgqkyjrrjqqqpndcscbmmelrwyhtyugieyuppqqtaeodlwychtpjmlzoxsckhzyitomjzypqqmnilliysxzztdwtxhddvtvpleqdbwamfnhhkszsfgfcdvsqakyqmmusdvihopbvygqdktcwehffasudmgxmyoualogetovskvcapucehnbfxltotdqhklvxfzmkrjqofaesvuzrtrrfvoczeuqkfegxwpxujizcmahhfiqflpzbuuodsmpyfuoovypstrvkzxxtsdsxwixiraxjuuecphjlimbutnvqtiqvesawxinlrvzyxcwfspdlsttrgknbdcvvtkfqfzwudswtgjpepoiisxbvrfkkeqmdvlpazilzjnywxjyaquirnqpdvigpccnaengnweuobqvxmlznomuejantslzyjjapkxemynsrqivcatemoluhqifyonbnizgycjrhblmuylezwxtdkkzwntancpharlmdwhnkdguhelqzjgvjtrzofmtpuhifoqyywrxrganoyehkonglbdeyshqtzxmimpodpmdchbcc';
var result = shortestCommonSupersequence(str1, str2);
console.log(result, result === expected);
