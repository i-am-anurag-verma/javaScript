

function cubic (w,l,h){
    this.width = w;
    this.leng = l;
    this.height = h;
    return {
        area: ()=> {
            return this.width * this.leng;
        },
        volume: () => {
            return this.width*this.leng*this.height
        },
        getWidth: () => this.width,
        getHeight: () => this.height,
        getLength: () => this.leng,
        width: this.width
    }
}

const cube1 = new cubic(2,3,4);
const cube2 = new cubic(4,5,6);
console.log(cube1.area(), '=====', cube2.area());
console.log(cube1.volume(), '=====', cube2.volume());
console.log(cube1.getWidth(), cube1.getLength(), cube1.getHeight(), cube1.width);

function volumeOfCylinder(hight, diameter){
    

    let radius = diameter/2;

    return Math.PI * Math.pow(radius,2) * hight;
}

//console.log(volumeOfCylinder(5,4))