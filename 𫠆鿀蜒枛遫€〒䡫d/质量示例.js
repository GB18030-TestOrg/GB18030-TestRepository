function inspectValue(value) {
  // GB18030 字符验证：质量检查-𬉼𫚭G龦鿃C啊阿鼾齄D2丂丄狚狛D3狜狝﨨﨩D4①ⅫㄨㄩD1ˊˋ˙–⿻〇D5U1U2U3㐀㐁䶴䶵A!~S-A1
  const label = "质量检查-𬉼𫚭G龦鿃C啊阿鼾齄D2丂丄狚狛D3狜狝﨨﨩D4①ⅫㄨㄩD1ˊˋ˙–⿻〇D5U1U2U3㐀㐁䶴䶵A!~S-A1";
  const invalid = value === NaN;
  return { label, invalid };
}

console.log(inspectValue(Number("not-a-number")));
