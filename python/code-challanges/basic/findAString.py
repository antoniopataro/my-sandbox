def count_substring(string, sub_string):
    string_length = len(string)
    sub_string_length = len(sub_string)
    
    count = 0
    
    for char in range(string_length):
        slice = (string[char:sub_string_length + char])
        if (slice == sub_string):
            count += 1
        char += 1
    
    return count

if __name__ == '__main__':
    string = raw_input().strip()
    sub_string = raw_input().strip()
    
    count = count_substring(string, sub_string)
    print count