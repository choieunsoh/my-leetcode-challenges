// 1092. Shortest Common Supersequence
// https://leetcode.com/problems/shortest-common-supersequence/description/
// T.C.: O((n+m)*2^(n+m))
// S.C.: O((m+m)^2)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  // Base case: both strings are empty
  if (str1 === '' && str2 === '') {
    return '';
  }

  // Base case: one string is empty, append the other string
  if (str1 === '') {
    return str2;
  }

  if (str2 === '') {
    return str1;
  }

  // If the first characters match, include it in the supersequence
  if (str1.charAt(0) === str2.charAt(0)) {
    return str1.charAt(0) + shortestCommonSupersequence(str1.substring(1), str2.substring(1));
  } else {
    // Try both options: picking from str1 or str2, and choose the shorter one
    const pickStr1 = str1.charAt(0) + shortestCommonSupersequence(str1.substring(1), str2);
    const pickStr2 = str2.charAt(0) + shortestCommonSupersequence(str1, str2.substring(1));
    return pickStr1.length < pickStr2.length ? pickStr1 : pickStr2;
  }
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
