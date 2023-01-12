// Bài 3: Arrow Function

// Dùng arrow function để code ngắn gọn, tiện lợi hơn

// Version cũ

function test()
{
    console.log("test");
}
test();
// Verison ES6
// Nếu có 1 câu lệnh không cần dấu mở ngoặc 
// Nhiều hơn 1 thì ngược lại
testtwo =() =>  console.log(">>> test");

testtwo();
// Truyền tham số vào hàm
hello = value => "Hello World = " + value;
console.log(hello('Phạm Xuân Tuyển'));
// Ngắn gọn phết :))
total = (value1 , value2) =>
{
    return value1 +  value2;
}
console.log(total(2,10));


