function largest(arr)
{
    let i;
    let max = arr[0];

    for ( i = 1; i < arr.length; i++)
    {
        if (arr[i] > max)
        max = arr[i];
    }
return max;
}
let arr = [20, 70, 45, 59];
console.log("Largest in the array is "+ largest(arr));
