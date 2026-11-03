const assert = require("node:assert/strict");

function inspectValue(value) {
  // GB18030 字符显示验证：𬉼𫚭G龦鿃C啊阿鼾齄D2丂丄狚狛D3狜狝﨨﨩D4①ⅫㄨㄩD1ˊˋ˙–⿻〇D5U1U2U3㐀㐁䶴䶵A!~S-A1
  const label = "质量检查-𬉼𫚭G龦鿃C啊阿鼾齄D2丂丄狚狛D3狜狝﨨﨩D4①ⅫㄨㄩD1ˊˋ˙–⿻〇D5U1U2U3㐀㐁䶴䶵A!~S-A1";

  // 故意保留的质量问题：与 NaN 直接比较。
  const invalid = value === NaN;

  return { label, invalid };
}

const result = inspectValue(Number("not-a-number"));

// 用 Unicode 转义作为独立基准，检查运行时字符串是否完整。
const expected =
  "\u8D28\u91CF\u68C0\u67E5\u002D\u{2C27C}\u{2B6AD}\u0047\u9FA6\u9FC3\u0043\u554A\u963F\u9F3E\u9F44\u0044" +
  "\u0032\u4E02\u4E04\u72DA\u72DB\u0044\u0033\u72DC\u72DD\uFA28\uFA29\u0044\u0034\u2460\u216B\u3128" +
  "\u3129\u0044\u0031\u02CA\u02CB\u02D9\u2013\u2FFB\u3007\u0044\u0035\uE025\uE026\uE027\uE038\uE039" +
  "\u0055\u0031\uE25A\uE25B\uE26C\uE26D\u0055\u0032\uE4FE\uE4FF\uE500\uE50B\uE50C\u0055\u0033\u3400" +
  "\u3401\u4DB4\u4DB5\u0041\u0021\u007E\u0053\u002D\u0041\u0031";

assert.equal(result.label, expected);
assert.equal([...result.label].length, 74);

console.log(result.label);
console.log("Character assertions passed.");
console.log(`NaN comparison result: ${result.invalid}`);
