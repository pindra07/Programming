
# Slicing lists
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[2:5])
print(numbers[3:5])


# Iterating with index
for idx, number in enumerate(numbers):
    print(idx, number)

# List comprehension
lst = []
for x in range(10):
    lst.append(x**2)

print(lst)

# with list comprehension
lst2 = [x**2 for x in range(10)]
print(lst2)

# Basic list comprehension syntax

square = [num**2 for num in range(10)]
print(square)

# list comprehension with conditional logic
for i in range(10):
    if i%2==0:
        lst.append(i)
print(lst)

even_numbers = [num for num in range(10) if num%2==0]
print(even_numbers)

# Nested List comprehension
# Nested List Comprehension [expression for item1 in iterable1 for item2 in iterable2]

lst3= [1, 2, 3, 4]
lst4= ['a', 'b', 'c', 'd']

pair = [(i, j) for i in lst3 for j in lst4]
print(pair)


# List comprehension with function calls

# List comprehension with else statement also...(HW)



