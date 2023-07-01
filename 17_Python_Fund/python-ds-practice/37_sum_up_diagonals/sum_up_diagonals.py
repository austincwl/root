def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    #print(matrix)
    sum = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            #print("starting number")
            #print("i:"+str(i))
            #print("j:"+str(j))
            #print("len(matrix):"+str(len(matrix)))

            if(i == j or len(matrix)-i-1 == j):
                #print("matches param")
                #print("select num:"+str(matrix[i][j]))
                sum = sum + matrix[i][j]
                if(i == j and len(matrix)-i-1 == j):   
                    sum = sum + matrix[i][j]
    return sum
