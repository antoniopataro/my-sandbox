if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())

    sorted = list(arr)
    sorted.sort()
    
    winner = sorted[-1]
    
    resultList = []
    
    for elem in sorted:
        if elem == winner:
            continue
        else:
            resultList.append(elem)
    
    print(resultList[-1])
    
