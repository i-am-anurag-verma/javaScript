function subString(word) {

    let result = [];

    for (let i = 0; i < word.length; i++)
    {
        for (let j = i + 1; j < word.length + 1; j++)
        {
            result.push(word.slice(i, j));
        }
    }
    return result;
}
console.log(subString('cat'))