
fruits = ["apple", "banana", "cherry"]

# using enumerate in a for loop

for idx, fruit in enumerate(fruits):
    print(f"Index {idx}: {fruit}")


for fruit in enumerate(fruits):
    print(type(fruit))
    print(fruit)