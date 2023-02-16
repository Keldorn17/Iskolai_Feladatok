import os

path = "C:\\Users\\patai\\OneDrive\\Desktop\\Programming\\Iskolai_Feladatok\\2023.02.13 Python\\31.FileDetection"

if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
    elif os.path.isdir(path):
        print("That is a directory!")
else:
    print("That location doesn't exist!")
