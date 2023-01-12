// Bài 6

const name  ="Phạm Xuân Tuyển\n";
const adress = 'Hưng Yên\n';
const note =`Đẹp trai, bốc phét giỏi`;
console.log(name  , adress , note);

let a = 5;
 let b =10;
 console.log(`result is ${(a+b)} result * 2  ${(a+b) *2}`);

 const base_url = "locahost:8080";
 const api = "get-user" ; fetch_page =2;
 //localhost"8080/get-user?page=2

 // dùng dấu pách kít
 const result = `//${base_url}/${api}?page=${fetch_page}`;
 console.log(result);

