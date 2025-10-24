import json


solution = """class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        start_n = n + 1
        str_n = str(start_n)

        while not all((str_n.count(c) == int(c) for c in str_n)):
            start_n += 1
            str_n = str(start_n)

        return start_n"""

def convertStringToJsonString(s):
    conv = ""

    for line in s.splitlines():
        conv += line + r"\n"

    return conv


print(convertStringToJsonString(solution))