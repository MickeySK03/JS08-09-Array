
const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ]; //sale =[Obj1, Obj2, Obj3]
  const newArr = [];
  //WalkThrough Array (loop)
for(let productObj of sales) {
    //each item = Object
    //#2nd Layer
    //access Object => dot, bracket
    let price = productObj.price;
    let discount = productObj.discount;
    let netPrice = price;
    if(discount) {
        netPrice = price *(1-discount);
    }
    //Create new Array and Object
    const newObj = {netPrice:netPrice};
    newArr.push(newObj);
    console.log(newObj);
}
console.log(newArr);
console.log(sales);


//วิธี2
// const newArr = [];
// //Obj = {price: 1000,discount: 0.1} 
// sales.forEach((Obj) => {
//     let netPrice = obj.price * (1-(obj.discount||0));
//     newArr.push({netPrice});
// });

//วิธี3
// sales.forEach((obj)=>newArr.push({newPrice:obj.price*(1-(obj.discount||0))}));
// console.log(sales);
// console.log(newArr);


