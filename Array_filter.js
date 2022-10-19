let fruits = [
    {
        fruit_name: "Apple",
        fruit_color: "Red"
    },
    {
        fruit_name:"Grapes",
        fruit_color:"green"
    },
    {
        fruit_name:"Kiwi",
        fruit_color:"green"
    }
];

let filtered_fruits = fruits.filter((fruit)=> fruit.fruit_color==="Red")
   console.log(filtered_fruits);
