// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// function isFour(prev: string, next: string) {
//     const str = prev + next
//     const list: string[] = ["IV", "XL", "CD", "IX", "XC", "CM"]
//     return list.includes(str)
// }

// function getFour(s: string) {
//     if (s === 'IV') {
//         return 4
//     } 
//     if (s === 'XL') {
//         return 40
//     }
//     if (s === 'CD') {
//         return 400
//     }
//     if (s === 'IX') {
//         return 9
//     }
//     if (s === 'XC') {
//         return 90
//     }
//     if (s === 'CM') {
//         return 900
//     }
//     return 0
// }

// function romanToInt(s: string): number {
//     const map = {}
//     map['I'] = 1
//     map['V'] = 5
//     map['X'] = 10
//     map['L'] = 50
//     map['C'] = 100
//     map['D'] = 500
//     map['M'] = 1000
//     if (s.length === 1) {
//         return map[s]
//     }
//     let prev = 0, next = prev + 1
//     let res = 0
//     for (let i = 0; i < s.length; ) {
//         prev = i
//         next = i + 1
//         if (isFour(s[prev], s[next])) {
//             const four = getFour(s[prev] + s[next])
//             res += four
//             i += 2
//         } else {
//             res += map[s[prev]]
//             i++
//         }
//     }
//     return res
// };


// optimizal

function romanToInt(s: string): number {
    const map = {}
    map['I'] = 1
    map['V'] = 5
    map['X'] = 10
    map['L'] = 50
    map['C'] = 100
    map['D'] = 500
    map['M'] = 1000
   
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] > map[s[i + 1]]) {
            res += map[s[i + 1]]
        } else {
            res -= map[s[i]]
        }
    }
    return res
};
