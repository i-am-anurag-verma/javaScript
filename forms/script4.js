class Empolyee{
    constructor(){
        console.log("Empolyees's constructor is here");
    }
    login(){
        console.log(`Employee has  logged in`)
    }

    logout(){
        console.log(`Employee has  logged out`)
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto Approved`)
    }
}

class Programer extends Empolyee{
    constructor(name){
        super(name)
        console.log(`${name} - Empolyees's constructor is here`);
        this.name
    }
    // constructor(...args){  //if there is no consructor in child class, this is created autometically
    //     super(...args)
    // }

    requestCoffee(x){
        console.log(`Empolyee has requested ${x} coffees`)
    }

    requestLeaves(leaves){
        super.requestLeaves(4)

        console.log("One Extra leaves Granted")
        // console.log(`Employee has requested ${leaves + 1} leaves (one Extra)`)
    }
}

let e = new Programer("John")

e.login()
e.requestLeaves(4)
// e.requestCoffee()