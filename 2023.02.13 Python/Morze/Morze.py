from DataCode import DataCode
List = DataCode

try:
    with open("morzeabc.txt", 'r', encoding="windows-1252") as file:
        file.readline()
        content = file.readlines()
        for line in content:
            List = DataCode(line.split("\t"))
except FileNotFoundError:
    print("File was not found")
