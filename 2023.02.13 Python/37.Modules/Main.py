# module = a file containing python code. May contain functions, classes, etc.
# used with modular programming, which is to separate a program into parts

# import Messages as msg     with this method I can give a name to the import
# msg.hello()

from Messages import *  # with this method I can specify which def I want to import also I can grab all with *
# from Messages import hello, bye
hello()
bye()

help("modules")  # This line of code shows all the available modules
