class Animal{
    constructor(name, color){
        this.name = this.capitalize(name)
    }

    walk(){
        alert("Animal " + this.name + "  is walking!!")
    }
     capitalize(name){
            return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let j = new Animal( "jack")
j.walk()