# str.format() = optional method that gives users
#                more control when displaying output

animal = "cow"
item = "moon"

# print("The " + animal + " juped over the " + item)
print("The {} jumped over the {}".format(animal, item))
print("The {1} jumped over the {0}".format(animal, item))  # positional argument
print("The {animal} jumped over the {animal}".format(animal="cow", item="moon"))  # keyword argument

text = "The {} jumped over the {}"
print(text.format(animal, item))

name = "Bro"

print("Hello, my name is {}. Nice to meet you.".format(name))
print("Hello, my name is {:10}. Nice to meet you.".format(name))
print("Hello, my name is {:<10}. Nice to meet you.".format(name))  # left align
print("Hello, my name is {:>10}. Nice to meet you.".format(name))  # right align
print("Hello, my name is {:^10}. Nice to meet you.".format(name))  # center align

number = 3.14159

print("The number pi is {:.3f}".format(number))
