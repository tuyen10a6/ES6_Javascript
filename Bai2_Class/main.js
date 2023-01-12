// Example
class Person
{
    constructor(name , address , age)
    {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    getname()
    {

    return 'I live in ' + this.name;

    }
}
const test  = new Person("Pham Xuan Tuyen" ,"Hung Yen" , 20);
console.log(">>>Check name :" , test );

console.log(test.getname());
// Test Class
class Novel
{
    constructor(Title , Author)
    {
        this.Title = Title;
        this.Author = Author;
    }
    getAuthor()
    {
        return   this.Author;
    }
}
 let myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh" , "Nguyễn Ngọc Ánh");
 console.log(myNovel.getAuthor()); 


