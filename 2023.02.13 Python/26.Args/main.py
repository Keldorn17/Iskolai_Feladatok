# *args = parameter that will pack all arguments into a tuple
#         useful so that a function can accept a varying amount of arguments

def add(*stuff):  # Only the * is important the name doesn't matter
    sum = 0
    # stuff[0] = 0  # You cannot change a value of tuple
    stuff = list(stuff)  # By converting to list you can now change the values of the new array
    stuff[0] = 0
    for i in stuff:
        sum += i
    return sum


print(add(1, 2, 3, 4, 5, 6))
