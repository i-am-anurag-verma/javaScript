var s = "Anurag Verma";

console.log(s.length); //6

console.log(s.toUpperCase());
console.log(s.toLowerCase());



console.log(s.split(" ")); // return a new array

let fruits = ["Banana", "Orange", "Mango", "Apple", "KIWI"]

console.log(fruits.join());

for(let i = 0; i < 10; i = i+2){
    console.log(i)
}

const  hello = (val)=> "Hello " + val
    console.log(hello("Anurag"))

    function fun(val){
        console.log("Hello "+ val)
    }

    fun("John")


    //map

    const numbers = [16, 25, 36, 49];
    let result = numbers.map(Math.sqrt)

    console.log(result);


    //anurag - AnUrAg

    function alternatetext(s){
             var chars = s.toLowerCase().split("");
             for(let i = 0; i <= chars.length; i+=2){
                chars[i] = chars[i].toUpperCase()
             }

             return chars.join("")
    }

    console.log(alternatetext("AnuragVerma"));

    let str = "johnyoutuber";

    let R = str.split("").map((letter,i)=>(i%2 == 0)? letter.toUpperCase():letter.toLowerCase()).join("")
 console.log(R)