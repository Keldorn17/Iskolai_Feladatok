import time


for i in range(10):
    print(i+1)

for i in range(50, 100+1, 2):
    print(i)

for i in "Bro Code":
    print(i)

# start, stop, step
for seconds in range(10, 0, -1):
    print(seconds)
    time.sleep(1)
print("Happy New Year!")

# nested loops

rows = int(input("How many rows?: "))
columns = int(input("How many columns?: "))
symbol = input("Enter a symbol to use: ")

for i in range(rows):
    for j in range(columns):
        print(symbol, end="")
    print()

