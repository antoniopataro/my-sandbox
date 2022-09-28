if __name__ == '__main__':
    n = int(raw_input())
    integer_list = map(int, raw_input().split())
    
    integer_tuple = tuple(integer_list)
    
    hashed = hash(integer_tuple)
    
    print(hashed)
    