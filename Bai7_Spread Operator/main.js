// Bài 7:
// Toán tử copy 

const firstArr =  [1,2,3];
const secondArr = [4,5,6];
// Push thêm phần tử vào mảng phần tử sẽ sếp cuối
secondArr.push(7);
// unshift thêm phần tử vào mảng phần tử sẽ sếp đầu
firstArr.unshift(0);
const thirdArr = [...firstArr , ...secondArr];
console.log(thirdArr);
// Note: Thuộc tính trùng nhau của Object thì bên phải đè bên trái
const testobject = {name:"Pham Xuan Tuyen" , adress:"Hung Yen"};
const viewobject = {...testobject};
console.log(viewobject);  
// Phương pháp ghi đè đổi thuộc tính
const profile = {...testobject , adress:"Thái Bình"};
console.log(profile);

// Bài tập
function sum(x, y ,z)
{
    return x + y + z;

}
const  numbers = [1,2,5];
console.log(sum(...numbers));