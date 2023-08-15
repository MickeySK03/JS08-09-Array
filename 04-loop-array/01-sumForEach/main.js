
const array = [29, 17, 13, 47, 23, 31];

let sum=0;
array.forEach((a) => {sum += a;console.log(a);});
console.log(`sum = ${sum}`)

//วิธีfor in
/*for(let index in array){
    sum += array[index];
} */

/*for of 
    for(let el of array){
        sum += el;
    }
*/