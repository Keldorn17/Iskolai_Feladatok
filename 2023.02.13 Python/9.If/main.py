age = int(input("How old are you?: "))

if age == 100:
    print("You are a century old!")
elif age >= 18:
    print("You are an adult!")
elif age < 0:
    print("You haven't been born yet!")
else:
    print("You are a child!")

temp = int(input("What is the temperature outside?: "))

# not(0 <= temp <= 30)
if 0 <= temp <= 30: # temp >= 0 and temp <= 30
    print("The temperature is good today!")
    print("Go outside!")
elif temp < 0 or temp > 30:
    print("The temperature is bad today!")
    print("Stay inside!")
