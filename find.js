let a = [2,3,4,6,8,9,29];
let x = 9435;
let index = -1

for(let i=0; i<a.length; i++)
{
    if(a[i]==x){
        index=i;
        break;
    }
   
}
console.log("index value of x " + index )