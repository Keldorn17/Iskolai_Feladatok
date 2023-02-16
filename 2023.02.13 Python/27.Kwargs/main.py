# **kwargs = parameter that will pack all arguments into a dictionary
#           useful so that a function can accept a varying amount of keyward arguments.

def hello(**names):  # Only the ** is important name doesn't matter
    # print("Hello " + kwargs['first'] + " " + kwargs['last'])
    print("Hello", end=" ")
    for key, value in names.items():
        print(value, end=" ")


hello(title="Mr.", first="Bro", middle="Dude", last="Code")
