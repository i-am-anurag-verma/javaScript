function lift(level,button){
    var arr = [0, 1, 2, 3];
    var result = 0

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(level === arr[i] && button === arr[j]){
                if(level < button){
                    result = level + button;
                }else{
                    result = button - level;
                }
            }
        }
    }

    return result;
}
console.log(lift(3, 2))