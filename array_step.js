function rangeBetween(start, end) 
{
  
		if (start > end) {
			const arr1 = new Array(start - end + 1);
			for (let i = 0; i < arr1.length; i++, start--) {
				arr1[i] = start;
			}
			return arr1;
		} 
       else 
       {
			const arr2 = new Array(end-start+1);
         
		for (let j = 0; j < arr2.length; j++, start++) 
        {
			arr2[j] = start;
		}
      		return arr2;
		}
	}

console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));