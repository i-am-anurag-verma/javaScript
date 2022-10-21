function Arrays_sum(arr1, arr2) 
{
  let result = [];
  let count = 0;
  let x=0;

  if (arr1.length === 0) 
   return "arr1 is empty";
  if (arr2.length === 0) 
   return "arr2 is empty";   

 while (count < arr1.length && count < arr2.length) 
  {
    result.push(arr1[count] + arr2[count]);
    count++;
  }

 if (count === arr1.length) 
 {
    for (x = count; x < arr2.length; x++)   {
      result.push(arr2[x]);
    }
  } 
  else
  {
  for (x = count; x < arr1.length; x++) 
    {
      result.push(arr1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));