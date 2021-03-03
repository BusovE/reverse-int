module.exports = function reverse (n) {
    let str = "" + Math.abs(n);
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr.join('')
}
