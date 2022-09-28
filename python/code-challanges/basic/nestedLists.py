if __name__ == '__main__':
    names = [];
    scores = [];
    records = [];
    
    for _ in range(int(raw_input())):
        name = raw_input()
        score = float(raw_input())
        
        names.append(name)
        scores.append(score)
        records.append([name, score])
        
    
    scores.sort();
        
    lowest = scores[0]
    
    newScores = []
    
    for score in scores:
        if score == lowest:
            continue
        else:
            newScores.append(score)
            
    secondLowest = newScores[0]
    
    resultList = []
    
    for record in records:
        if record[1] == secondLowest:
            resultList.append(record[0])
        else:
            continue
        
    resultList.sort()
    
    for name in resultList:
        print(name)
