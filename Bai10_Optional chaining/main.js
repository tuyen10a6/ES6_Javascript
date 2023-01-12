// Bài 10:
let UserAdmin = {
    admin() {
        alert("I am Tuyen");
    }
}
let userGuest = {};
// UserAdmin.admin();
// Tránh bug
console.log(userGuest?.admin?.() ??
    'User không tồn tại');

let obj =
{
    name: "Phạm Xuân Tuyển",
    age: 20,
    address:
    {
        street: 'Hưng Yên',
        province: 'Tp Hưng Yên'
    }

}
console.log(obj.address?.provinces?.ss ?? 'Không tồn tại');