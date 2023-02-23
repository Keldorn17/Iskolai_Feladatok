
text = "Have a nice day! See ya"

with open('text.txt', 'w') as file:  # r = read, w = write, a = append
    file.write(text)
