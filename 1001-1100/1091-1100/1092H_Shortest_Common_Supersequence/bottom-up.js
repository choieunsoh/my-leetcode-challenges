// 1092. Shortest Common Supersequence
// https://leetcode.com/problems/shortest-common-supersequence/description/
// T.C.: O(n*m*(n+m))
// S.C.: O(m*(n+m))
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;

  // Initialize the first row (when str1 is empty, the supersequence is str2's prefix)
  let prevRow = new Array(str2Length + 1).fill('');
  for (let col = 0; col <= str2Length; col++) {
    prevRow[col] = str2.substring(0, col);
  }

  // Fill the DP table row by row
  for (let row = 1; row <= str1Length; row++) {
    // Initialize the first column (when str2 is empty, the supersequence is str1's prefix)
    const currRow = new Array(str2Length + 1).fill('');
    currRow[0] = str1.substring(0, row);

    for (let col = 1; col <= str2Length; col++) {
      // If characters match, extend the supersequence from the diagonal value
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        currRow[col] = prevRow[col - 1] + str1.charAt(row - 1);
      } else {
        // If characters do not match, choose the shorter supersequence
        // From previous row (exclude current str1 char)
        const pickS1 = prevRow[col];
        // From previous column (exclude current str2 char)
        const pickS2 = currRow[col - 1];

        currRow[col] = pickS1.length < pickS2.length ? pickS1 + str1.charAt(row - 1) : pickS2 + str2.charAt(col - 1);
      }
    }
    // Move to the next row (update previous row reference)
    prevRow = currRow;
  }

  // Return the shortest common supersequence from the last cell
  return prevRow[str2Length];
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
