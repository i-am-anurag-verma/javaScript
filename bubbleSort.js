// let a = [2,3,4,6,8,1,20]
// let temp;
// for(let i=0; i<a.length-1; i++){

//     for(let j=0; j<a.length-1-i; j++){
//         if(a[j]>a[j+1]){
//             temp=a[j]
//             a[j]=a[j+1]
//             a[j+1]=temp
//         } 
//     }
// }
// for(let i=0; i<a.length; i++){
//     console.log(a[i])
// }

// ///

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//     for(var i in a){
//         console.log("row "+ i);
//         for(var j in a[i]){
//             console.log("" + a[i][j])
//         }
//     }


// let arr = [2, 4, 6, 8, 10];
// let x = 12;

// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == x) {
//         index = i;
//         break;
//     }
// }

// if (index > -1) {
//     console.log("Index position==>", index)
// }
// else {
//     console.log("Number  Not available in this array")
// }

/////////////////NEXT/////////////

//swap two number

// let x = 30;
// let y = 40;
 
// x = x + y; 
// y = x - y; 
// x = x - y; 
 
// console.log(`x = ${x}`); 
// console.log(`y = ${y}`); 
// console.log("x = " + x);
// console.log("y = " + y);

// let fruits = [
//     {
//         fruit_name: "Apple",
//         fruit_color: "Red"
//     },
//     {
//         fruit_name:"Grapes",
//         fruit_color:"green"
//     },
//     {
//         fruit_name:"Kiwi",
//         fruit_color:"green"
//     }
// ];

// let filtered_fruits = fruits.filter((fruit)=> fruit.fruit_color==="Red")
//    console.log(filtered_fruits);


///////////////////key:pair array/////////

// let book_id = [1,2,3]

// let book_names = [
//     "Live Life Happily...!!",
//     "Be Energetic Always...!!",
//     "Earn Respect...!!"

// ];
// let book_author = ["Aman", "Ram", "Shyam"];

// let book_copies = [10,20,30];

// let book_details = book_id.map((id, index_value)=>{
//     return {
//         id : id,
//         book_names:book_names[index_value],
//         book_author:book_author[index_value],
//         book_copies:book_copies[index_value]
//     }
// });
// console.log(book_details)

/////////////////////////////////////////
let employees_data = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];
for (let object of employees_data) {
    if (object.employee_id === 1) {
        object.employee_name = "Anthony";
    }
}
console.log("Updated Data: ");
console.log(employees_data);