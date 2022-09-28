def mutate_string(string, position, character):
    splittedString = list(string)
    
    splittedString[position] = character
    
    return "".join(splittedString)
    
if __name__ == '__main__':
    s = raw_input()
    i, c = raw_input().split()
    s_new = mutate_string(s, int(i), c)
    print s_new