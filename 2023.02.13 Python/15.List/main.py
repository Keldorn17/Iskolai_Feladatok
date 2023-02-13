food = ["pizza", "hamburger", "hotdog", "spaghetti", "pudding"]

food[0] = "sushi"

food.append("ice cream")
food.remove("hotdog")
food.pop()  # remove the last element (ice cream)
food.insert(0, "cake")
food.sort()
food.clear()
# print(food[0])

for x in food:
    print(x)

# 2D lists
drinks = ["coffee", "sode", "tea"]
dinner = ["pizza", "hamburger", "hotdog"]
dessert = ["cake", "ice cream"]

food = [drinks, dinner, dessert]

print(food[1][2])  # 1st [] => variable  2nd [] => inside element     [1][2] => dinner => "hamburger"
