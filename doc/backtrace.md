
#### backtrace算法解决的问题

There are three types of problems in backtracking.

    Decision Problem – In this, we search for a feasible(可行的) solution.

    Optimization Problem – In this, we search for the best solution.

    Enumeration Problem – In this, we find all feasible(所有可行的) solutions.

Pseudo Code for Backtracking :

1. Recursive backtracking solution.

    ```
    void findSolutions(n, other params) :
        if (found a solution) :
            solutionsFound = solutionsFound + 1;
            displaySolution();
            if (solutionsFound >= solutionTarget) : 
                System.exit(0);
            return
    
        for (val = first to last) :
            if (isValid(val, n)) :
                applyValue(val, n);
                findSolutions(n+1, other params);
                removeValue(val, n);
    ```

2. Finding whether a solution exists or not

    ```
    boolean findSolutions(n, other params) :
        if (found a solution) :
            displaySolution();
            return true;
    
        for (val = first to last) :
            if (isValid(val, n)) :
                applyValue(val, n);
                if (findSolutions(n+1, other params))
                    return true;
                removeValue(val, n);
            return false;
    ```


回溯算法是暴力搜索的一种算法。

回溯算法的伪代码，一般如下：

```
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```