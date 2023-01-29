class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }

    run(){
        console.log(this.name + "  is running!!")
    }
    shout(){
        console.log(this.name + " is shouting!!!")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + "is eating Banana!")
    }
    hide(){
        console.log(`${this.name} is hidding`)
    }
}

let ani = new Animal("Bruno", "White");
let m = new Monkey("Chimpu", "Orange");

ani.shout()
m.eatBanana()
m.hide()
// ani.hide()//This will throw ERROR