#### 回溯算法

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
   
#### 位运算

#### 动态规划

动态规划（英语：Dynamic programming，简称DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

动态规划常常适用于有重叠子问题[1]和最优子结构性质的问题.
   
#### 参考资料

- [回溯算法基本解释](https://www.geeksforgeeks.org/backtracking-introduction/) 

- [动态规划(dynamic programming)wiki](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)

- [动态规划详细讲解](https://blog.csdn.net/u013309870/article/details/75193592#:~:text=%E5%A6%82%E6%9E%9C%E9%80%92%E5%BD%92%E7%AE%97%E6%B3%95%E5%8F%8D%E5%A4%8D%E6%B1%82%E8%A7%A3,%E8%A1%A8%E4%B8%8D%E7%94%A8%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0%E9%80%92%E5%BD%92%E3%80%82)

- [动态规划解题套路](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie#er-cou-ling-qian-wen-ti)

- [教你如何解题的硬核文档](https://github.com/labuladong/fucking-algorithm)

- [如何系统地学习数据结构与算法？](https://zhuanlan.zhihu.com/p/137041568)
   
#### 参考资料

- [回溯算法基本解释](https://www.geeksforgeeks.org/backtracking-introduction/) 
