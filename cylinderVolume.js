function cylinder(hight, diameter){
    this.diameter = diameter;
    this.hight = hight;
}
cylinder.prototype.volume = function(){
    var radius = this.diameter/2;
    return this.hight * Math.PI * radius * radius;
}
var cyl = new cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.volume().toFixed(2));

