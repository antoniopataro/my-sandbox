if __name__ == '__main__':
    N = int(raw_input())
    
    output = []
    
    for input in range(N):
        input = raw_input()
        
        command = input.split(" ")[0]
        
        if command == "insert":
            position = input.split(" ")[1]
            value = input.split(" ")[2]
        
            output.insert(int(position), int(value))
        
        if command == "remove":
            value = input.split(" ")[1]
            
            output.remove(int(value))
            
        if command == "append":
            value = input.split(" ")[1]
        
            output.append(int(value))
            
        if command == "sort":
            output.sort()
            
        if command == "pop":
            output.pop()
            
        if command == "reverse":
            output.reverse()
            
        if command == "print":
            print(output)