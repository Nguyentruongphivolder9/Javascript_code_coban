
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
// 3. Dược gọi lại (trong hàm nhận đối số)

function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình javascript')
    }
}
function myCallback(value) {
    // console.log('Value: ' + value)
}
myFunction(myCallback)

// Array.prototype.map2 = function(callBack) {
//     var output = [], arrayLength = this.length

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callBack(this[i], i)
//         output.push(result)
//     }
//     return output
// }

var courses3 = [
    'Javascript',
    'PHP',
    'Ruby'
]

// var htmls =  courses3.map2(function(course3) {
//     return `<h2>${course3}</h2>`
// })

// console.log(htmls.join(''))

// var htmls = courses3.map(function(course3) {
//     return `<h2>${course3}</h2>`
// })

// console.log(htmls.join(''))

// BÀI TẬP CALLBACK

// map
// Array.prototype.map3 = (callback2) => {
//     var output1 = [], arrayLength = this.length
//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callback2(this[i], i)
//         output1.push(result)
//     }
//     return output1
// }

var courses4 = [
    'Javascript',
    'PHP',
    'Ruby',
    'C++',
    'Python',
    'C#'
]

// var htmls = courses4.map3(course4 => {
//     console.log(index, course4)
//     return `<h2>${course4}</h2>`
// })

// console.log(htmls.join(''))

// forEach2

// Array.prototype.forEach2 = function(callbackForEach) {

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callbackForEach(this[index], index, this)
//         }
//     }
// }

var courses5 = [
    'Javascript',
    'PHP',
    'Ruby',
    'C++',
    'Python',
    'C#'
]

// courses5.push('Pascal', 'Java')

// courses5.forEach2(function(course5, index, array) {
//     console.log(course5, index, array)
// })



// filter2: trả về các element thỏa mãn điều kiện

// Array.prototype.filter2 = function(callbackFilter) {

//     var output = []
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callbackFilter(this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }

//     return output
// }

var courses6 = [
    {
        name: 'Javascript',
        coin: 680
    },{
        name: 'PHP',
        coin: 860
    },{
        name: 'Ruby',
        coin: 980
    },
]

// var filterCourses = courses6.filter2( function(course6, index, array) {
//     return course6.coin > 700
// })

// console.log(filterCourses)


// some2: (true/false) kiểm tra tối thiểu có một element trong array thỏa mãn điều kiện

// Array.prototype.some2 = function(callbackSome) {

//     var output = false

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callbackSome(this[index], index, this)){
//                 output = true
//                  break
//             }
//         }
//     }
//     return output
// }

var courses7 = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false
    },{
        name: 'PHP',
        coin: 860,
        isFinish: true
    },{
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
]

// var result = courses7.some(function(course7, index, array) {
//     return course7.isFinish
// })

// console.log(result)



// every: (true/false) kiểm tra tất cả các element thỏa mãn điều kiện

// Array.prototype.every2 = function(callbackEvery) {

//     var output = true

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//            var result = callbackEvery(this[index], index, this)
//            if (!result) {
//                 output = false
//                 break
//            }
//         }
//     }
//     return output
// }

var courses8 = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },{
        name: 'PHP',
        coin: 860,
        isFinish: true
    },{
        name: 'Ruby',
        coin: 980,
        isFinish: true
    }
]

// var result = courses8.every2(function(course8, index, array) {
//     return course8.isFinish
// })

// console.log(result)




// Đệ quy: là khi hàm gọi lại chính nó

// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

// function giaithua(number) {
//     var output = 1 
    
//     for (var i = number; i > 0; i--) {
//         output = output * i
//     }
//     return output
// }

// console.log(giaithua(6))





// HTML DOM (Document Object Model)

// Gồm 3 thành phần: 
// 1. Element
// 2. Attribute
// 3. Text


// innerText, textContent
// var headingElement = document.querySelector('.heading')
// console.log(headingElement.innerText = 'New heading');

// innerHTML, outerHTML
// var boxHTML = document.querySelector('.box')
// boxHTML.innerHTML = '<div>innerHTML</div>'




// Classlist property
// var boxClasslist = document.querySelector('.box')
// console.log(boxClasslist.classList);
// add: thêm class vào element
// boxClasslist.classList.add('box-2')
// contains: kiểm tra xem cs class trong element hay không
// console.log(boxClasslist.classList.contains('box-2'));
// remove: xóa class
// boxClasslist.classList.remove('box-2')

// toggle: kiểm tra class, nếu kh có thì thêm, nếu có thì xóa
// setInterval(() => {
//     boxClasslist.classList.toggle('box-2')
// }, 3000)





// DOM event
// var domEvent = document.querySelectorAll('.events')

// for(var i=0; i<domEvent.length; ++i){
//     domEvent[i].onclick = (e) => {
//         console.log(e.target);
//     }
// }
// console.log(i);

// var numberText;
// var inputElement = document.querySelector('input')
// var number = document.querySelector('.number')

// inputElement.onkeyup = (e) => {
//     switch(e.which){
//         case 39:
//             console.log('Di chuyển về bên phải');
//             break;
//         case 37:
//             console.log('Di chuyển về bên trái');
//             break;
//     }
    // number.innerHTML = `<h3>${e.which}<h3>`
// }



// DOM event

// 1. preventDefault: ngăn chặn hành vi mặc định
// 2. stopPropagation: ngăn chặn nổi bọt

// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = (e) => {
//     e.preventDefault()
// }

// ulElement.onclick = (e) => {
//     console.log(e.target);
// }


// JSON

// var json = '["Javascript", "PHP"]';
//  var json = '{"Javascript": "khoa hoc", "PHP": "Free"}';

//  console.log(JSON.parse(json));

//  console.log(JSON.stringify({
//     name: 'Phi',
//     age: 23
//  }));


// Promise
// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // logic
//         // thành công: resolve
//         // thất bãi: reject

//         resolve();
//     }
// )
// promise
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(resolve, 3000)
//         });
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Done !');
//     })

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(3000)
//     .then(() => {
//         console.log('Ngủ đi thằng lòn');
//         return sleep(3000);
//     })
//     .then(() => {
//         console.log('Đập bỏ mẹ m giờ, có ngủ không');
//         return sleep(3000);
//     })


