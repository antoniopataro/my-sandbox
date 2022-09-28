if __name__ == '__main__':
    n = int(raw_input())
    student_marks = {}
    for _ in range(n):
        line = raw_input().split()
        name, scores = line[0], line[1:]
        scores = map(float, scores)
        student_marks[name] = scores
    query_name = raw_input()
    
    names = list(student_marks.keys())
    queryIndex = names.index(query_name)
    queryValues = list(student_marks.values())[queryIndex]
    
    sum = 0
    
    for value in queryValues:
        sum += value
        
    average = sum/len(queryValues)
    averageToFixed = (format(average,".2f"))
    
    print(averageToFixed)
