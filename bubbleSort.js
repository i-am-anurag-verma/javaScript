var a = [2,3,4,6,8,1,20]
let temp;
for(let i=0; i<a.length-1; i++){

    for(let j=0; j<a.length-1; j++){
        if(a[j]>a[j+1]){
            temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
        } 
    }
}
for(let i=0; i<1; i++){
    console.log(a)
}

