let book_id = [1,2,3]

let book_names = [
    "Live Life Happily...!!",
    "Be Energetic Always...!!",
    "Earn Respect...!!"

];
let book_author = ["Aman", "Ram", "Shyam"];

let book_copies = [10,20,30];

let book_details = book_id.map((id, index_value)=>{
    return {
        id : id,
        book_names:book_names[index_value],
        book_author:book_author[index_value],
        book_copies:book_copies[index_value]
    }
});
console.log(book_details)