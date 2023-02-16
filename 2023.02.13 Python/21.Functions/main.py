# function = block of code which is executed only when it is called.
import math


def hello(first_name, last_name, age):
    print("Hello " + first_name + " " + last_name)
    print("You are " + str(age) + " years old")
    print("Have a nice day!")


def cal_power(base, power):
    return math.pow(base, power)


print("The power of 5^5.5 is: " + str(cal_power(5, 5.5)))
hello("Bro", "Code", 21)
