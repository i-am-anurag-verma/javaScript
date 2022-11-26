function Palindrome(number)
{
    var rem, temp, sum = 0;

    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        sum = sum*10+rem;
    }
    if(sum==temp){
        return sum;
    }
    
    
}
