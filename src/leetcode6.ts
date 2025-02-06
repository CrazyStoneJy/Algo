function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s
    }
    const levels = []
    for (let i = 0; i < numRows; i++) {
        levels.push([])
    }

    // put letters in levels
    let dir = 1
    for (let i = 0; i < s.length; i++) {
        // calculate real index
        if (i < numRows) {
            levels[i].push(s[i])
            dir = -1 
            // console.log(levels)
        } else {
            let index = 0
            if (dir === 1) {
                // when beyond threshold that change direction
                if ((index = (i % (numRows - 1))) === 0) {
                    dir = -1
                    index = numRows - 1
                } else {
                    index = i % (numRows - 1)
                }
                levels[index].push(s[i])
            } else {
                // when beyond threshold that change direction
                if ((index = i % (numRows - 1)) === 0) {
                    dir = 1
                } else {
                    index = (numRows - 1 - (i % (numRows - 1)))
                }
                levels[index].push(s[i])
            }
            // console.log('i:', i,  ', index: ', index)
            // console.log(levels)
        }
    }

    // traverse levels
    let str = ''
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < levels[i].length; j++) {
            str += levels[i][j]
        }
    }
    return str
};