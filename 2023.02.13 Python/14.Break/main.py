while True:
    name = input("Enter your name: ")
    if name != "":
        break  # used to terminate the loop entirely

phone_number = "123-456-7890"
for i in phone_number:
    if i == "-":
        continue  # skips to the next iteration of the loop
    print(i, end="")

for i in range(1, 21):
    if i == 13:
        pass  # does nothing, acts as a placeholder
    else:
        print(i)
