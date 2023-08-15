ผลจากการรันคำสั่งในบรรทัด * คืออะไร

```js
let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); 
//alert("a", "b", function(){alert(this)})
// *function() รูปแบบเดียวกันคือการ call function
```