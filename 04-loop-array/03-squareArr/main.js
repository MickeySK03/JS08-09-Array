
const arr = [2, 3, 5, 7, 11];


function squareArr() {
    const newArr = [];  
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]**2);
    }
    return newArr;
}
let newArray = squareArr(arr);


console.log(newArray); // array ใหม่  
console.log(arr);// แสดงค่าเดิม

