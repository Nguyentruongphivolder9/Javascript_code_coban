
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

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])

// console.log(flatArray)

// Lấy các khóa học đưa vào mảng mới

var topics = [
    {
        topic: "Front-end",
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
        topic: "Back-end",
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

var newCourses = topics.reduce(function(courses1, topic) {
    return courses1.concat(topic.courses1)
}, [])

console.log(newCourses)

var htmls = newCourses.map(function(courses1) {
    return `
        <div>
            <h2>${courses1.title}</h2>
            <p>ID: ${courses1.id}</p>
        </div>
    `
})

console.log(htmls.join(''))