function circle(radius){

    this.area = function(){
        return Math.PI * Math.pow(radius,2);
    };

    this.perimeter = function(){
        return 2 * Math.PI * radius;
    }
}

var c = new circle(4)
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));