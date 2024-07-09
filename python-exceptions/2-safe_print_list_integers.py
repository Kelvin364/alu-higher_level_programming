#!/usr/bin/python3
def safe_print_list_integers(my_list=[], x=0):
  val=0
  for i in range(x):
    try:
            print("{:d}".format(my_list[i]), end="")
            val += 1
            for x in range(val):
                print("", end="")
    except (ValueError, TypeError):
            print("", end="")
    print()
    return val
