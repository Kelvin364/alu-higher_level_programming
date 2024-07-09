#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    val = 0
    try:
        for i in range(x):
            print(my_list[i], end="")
            val += 1
            for x in range(val):
                print("", end="")
    except IndexError:
        pass
    print()
    return val

