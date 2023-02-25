from car import Car

car_1 = Car("Chevy", "Corvette", 2021, "blue")
car_2 = Car("Ford", "Mustang", 2022, "red")

Car.wheels = 2  # infect all instances of a class
car_1.wheels = 2

print(car_2.make)
print(car_2.model)
print(car_2.year)
print(car_2.color)

print(car_1.wheels)
print(car_2.wheels)

print(Car.wheels)

car_1.drive()
car_2.stop()

