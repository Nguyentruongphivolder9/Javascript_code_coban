var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'C++'
]

// To string: chuyển từ array thành string
// console.log(languages.toString())

// Join: chuyển từ array thành string (nhưng có thể thêm các kí tự)
// console.log(languages.join(', '))

// Pop: xóa element cuối mảng 
// console.log(languages.pop())
// console.log(languages.pop())
// console.log(languages.pop())

// Push: thêm một hoặc nhiều element tử vào cuối array
// console.log(languages.push('Java'))
// console.log(languages)

// Shift: xóa element đầu mảng
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages)

// Unshift: thêm một hoặc nhiều element ở đầu mảng
// console.log(languages.unshift('PHI', 'NGUYEN'))
// console.log(languages)

// Splicing: xóa, cắt, chèn element vào mảng
// languages.splice(1, 3, 'Java')
// console.log(languages)

// Concat: hợp nhất các array
// var languages2 = [
//     'Java',
//     'C#',
//     'blockchain'
// ]
// console.log(languages2.concat(languages))

// Slicing: cắt một hoặc một vài element
console.log(languages.slice(1, 3))
console.log(languages)