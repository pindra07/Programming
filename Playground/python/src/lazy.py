# Lazy in programming means-> Don't do this work yet. do it only when the result
# is acutally needed

def expensive_calculation():
    print("Calculating...")
    return 42


# Now x is not computed immediately only when we want that i.e. x()
x = expensive_calculation()

print("rogra")


# Python Generators
print("_____generators______")
def numbers():
    for i in range(5):
        print("Generating", i)
        yield i



