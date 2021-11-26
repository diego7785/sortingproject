def sort(arr):
    if len(arr) > 1:
  
        mid = len(arr)//2
        leftArr = arr[:mid]
        rightArr = arr[mid:]

        sort(leftArr)
        sort(rightArr)
  
        i = 0
        j = 0
        k = 0
  
        while i < len(leftArr) and j < len(rightArr):
            #print("{} : {}".format("number ", leftArr[i]))
            
            if leftArr[i] < rightArr[j]:
                arr[k] = leftArr[i]
                i += 1
            else:
                arr[k] = rightArr[j]
                j += 1
            k += 1


        while i < len(leftArr):
            arr[k] = leftArr[i]
            i += 1
            k += 1
  
        while j < len(rightArr):
            arr[k] = rightArr[j]
            j += 1
            k += 1

    return arr