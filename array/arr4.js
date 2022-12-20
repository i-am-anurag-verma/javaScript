let arr = [ 3, 8, 70, 6, 5, -4, 88, 2, 10,0,-1 ]

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[i]>arr[j]){
                //swap without using third variable
                arr[i]=arr[i]+arr[j]
                arr[j]=arr[i]-arr[j]
                arr[i]=arr[i]-arr[j]
            }
        }
    }

console.log(arr)