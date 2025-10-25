import json


solution = """class Solution:
    def hasSameDigits(self, s: str) -> bool:
        while len(s) > 2:
            ns = ""
            for i in range(len(s)-1):
                d = (int(s[i]) + int(s[i+1])) % 10
                ns += str(d)
            
            s = ns

        return s[0] == s[1]"""

def convertStringToJsonString(s):
    conv = ""

    for line in s.splitlines():
        conv += line + r"\n"

    return conv


print(convertStringToJsonString(solution))