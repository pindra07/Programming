
# Creating a tuple

tuple_1 = (1, 2)
print(tuple_1)
print(type(tuple_1))

numbers = tuple([1, 2, 3, 4, 5, 6])

# Immutable Nature of Tuples
 
# Tuple methods
numbers.count(1)
# numbers.count(element)
numbers.index(3)
# index number.index(index) -> the value at the index will return
# -----------------------------------------------------------------

# Packing and unpacking tuple
# Packing
packed_tuple = 1, "Hello world", 3.14
print(packed_tuple)

# unpacking (something like destructuring)
a,b,c = packed_tuple
print(a)
print(b)
print(c)
# unpacking with *
numbers1 = (1, 2, 3, 4, 5, 6)
first, *middle, last = numbers1
print(first)
print(middle)
print(last)


