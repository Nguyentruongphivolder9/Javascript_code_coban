
/**
    Array methods:

        forEach(): Duyệt qua từng phần tử của mảng

        every(): Kiểm tra tất cả các phần tử của mảng thỏa mãn...

        some(): 

        find():

        filter():

        map(): chỉnh sửa hoặc thay đổi các element của array

        reduce():
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 0
    },
    {
        id: 4,
        name: 'C++',
        coin: 400
    },
    {
        id: 5,
        name: 'HTML',
        coin: 600
    }
]

//Flat - "làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function(flatOutput, depth) {
    return flatOutput.concat(depth)
}, [])

// console.log(flatArray)

// Lấy các khóa học đưa vào mảng mới

var topics = [
    {
        topic1: "Front-end",
        courses1: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2, 
                title: "Javascript"
            }
        ]
    },
    {
        topic1: "Back-end",
        courses1: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJs"
            }
        ]
    }
]

var newCourse = topics.reduce(function(course1, topic) {
    // return course1.concat(topic.topic1)
    return course1.concat(topic.courses1)
}, [])

// console.log(newCourse)

var htmls = newCourse.map(function(course1) {
    return `
        <div>
            <h2>${course1.title}</h2>
            <p>ID: ${course1.id}</p>
        </div>
    `
})

// console.log(htmls.join(''))

//** includes methods: tìm kiếm element trong string và array

var title = 'Responsive wed design'

// console.log(title.includes('Responsive', 2))

var course2 = ['Javascript', 'PHP', 'Dark']

// console.log(course2.includes('Javascript'))



/* 

Math object

- Math.PI: trả về số pi
console.log(Math.PI)

- Math.round(): làm tròn số
console.log(Math.round(1.5))

- Math.abs(): trả về giá trị tuyệt đối (trả về số dương)
console.log(Math.abs(-8))

- Math.ceil(): làm tròn trên
console.log(Math.ceil(4.55775)) => 5

- Math.floor(): làm tròn dưới
console.log(Math.floor(4.55775)) => 4

- Math.random(): tạo ra một số ngẫu nhiên trong một khoảng cho trước

- Math.min(): tìm số nhỏ nhất
console.log(Math.min(-8, -5, 6, 9, -34)) => -34

- Math.max(): tìm số lớn nhất
console.log(Math.max(-8, -5, 6, 9, -34)) => 9

*/
var random = Math.floor(Math.random() * 100)

if (random < 5) {
    // console.log('Cường hóa thành công!')
}


// Callback?

// Là hàm (function) được truyền qua đối số
//  Khi gọi hàm khác

// 1. Là hàm (function)
// 2. Được truyền qua đối số

function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình javascript')
    }
}

function myCallback(value) {
    console.log('Value: ' + value)
}

myFunction(myCallback)

