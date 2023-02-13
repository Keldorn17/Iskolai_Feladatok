name = "Bro Code"

# [start:stop:step]

first_name = name[:3] # :3 = 0:3
last_name = name[4:] # 4: = 4:8
funky_name = name[::2] # ::2 = 0:8:2
reversed_name = name[::-1]

print(first_name)
print(last_name)
print(funky_name)
print(reversed_name)

website1 = "https://google.com"
website2 = "https://wikipedia.com"

slice = slice(8, -4)

print(website1[slice])
print(website2[slice])

