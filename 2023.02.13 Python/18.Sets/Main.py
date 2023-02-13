# set = collection which is unordered, unindexed. No duplicate values

utensils = {"fork", "spoon", "knife", "knife"}
dishes = {"bowl", "plate", "cup", "knife"}

# utensils.add("napkin")
# utensils.remove("fork")
# utensils.clear()
utensils.update(dishes)
dinner_table = utensils.union(dishes)

print(utensils.difference(dishes))
print(utensils.intersection(dishes))  # returns the items that they have in common

for x in dinner_table:
    print(x)
