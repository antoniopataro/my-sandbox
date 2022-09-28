def swap_case(s):
    splittedString = list(s)
    
    output=[]
    
    for char in splittedString:
        lowerCase = char.lower()
        upperCase = char.upper()
        
        output.append(upperCase) if char == lowerCase else output.append(lowerCase)
    
    return ("").join(output)

if __name__ == '__main__':
    s = raw_input()
    result = swap_case(s)
    print result