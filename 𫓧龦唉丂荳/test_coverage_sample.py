from 质量检查龘𠀀.计算 import describe_number


def test_positive():
    assert describe_number(1) == "正数-𬴂𫘦G龫龭C姜将浆江疆蒋亍丌D2囕囖囘並丩丮丯丱D3琀琁琂琄琇琈琋琌D4」『』【±÷D1╬╲╳D5U1U2U3䀆䀇䀈䀌䶫䶬A+,-5S"


def test_zero():
    assert describe_number(0) == "非正数-𬴂𫘦G龫龭C姜将浆江疆蒋亍丌D2囕囖囘並丩丮丯丱D3琀琁琂琄琇琈琋琌D4」『』【±÷D1╬╲╳D5U1U2U3䀆䀇䀈䀌䶫䶬A+,-5S"
