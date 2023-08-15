const log = console.log;

log('learn array');
//### 1.Declaration
//Array Literal
//element : สมาชิก
const friends = ['Money', 'Non', 'Peakpoon', 'Fon'];
log(friends);

//Array Constructor
const height = new Array(150, 160, 175);
log(height);

//## 2.Access, Modify, Add, Delete
//Bracket Notation with Index

//Access
log(friends[0]);//Money
log(friends[2]);//Peakpoon
log(friends[-1]);//undefined เพราะindex เริ่มที่0

//update
friends[0] = 'Gold';
log(friends);

friends[1] = 'Michael';
log(friends);

//ถ้าพยายามอัพเดตใน index ที่ไม่มีอยู่ === add
//friend[-1] = 'Pavit';
//log(friends);

//Add
log(friends[3]);
friends[4] = 'Git';
log(friends);

//Delete
delete friends[2];
log(friend);  
log(friends[2]); // undefined

//##3.basic Property and method of array

//<arr>.length
log(friends.length);

// friends[5] = 'Mix';
// friends[6] = 'Mix'; จะข้ามไปลำดับนึงจะเกิด emptyก่อน mix
// friends[4] = 'Mix';
friends[friends.length] = 'Mix';//ได้ความยาวของตัวปัจจุบัน (ต่อกัน)
log(friends);
log(friends.length);

// for(let i=0; i<=friends.length -1;i++){
//     //i=1,2,3,4,5 (length=6)
//     console.log(i, friends[i]);
// }

for(let i=0; i<friends.length;i++){
    //i=1,2,3,4,5 (length=6)
    console.log(i, friends[i]);
}

//Method CRUD element

const animals = ['Spider', 'Cat', 'Elephant'];

//Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
//Mutable : เปลี่ยนแปลงค่าได้

//Method Push ทำให้ Array Mutate ไหม ? Yes (ยาวขึ้น)
animals.push('Dog');
log(animals); //Spider ,Cat, Elephant, Dog
log(r);// 4 แสดงจำนวนในarray
//push เพิ่มต่อท้าย
//pop ตัดท้ายออก
//shift() ตัดหัวออก
//unshift() เพิ่มหัว

let s = animals.unshift('Snake', 'Mountain Bird');
log(animals);
log(s); // 6

let t = animals.pop();
log(animals);
log(t);// Dog

//##4.Loop

//for loop
//Imperative กำหนด  i เอง
for(let i = 0; i<animals.length; i++){
    console.log(animals[i]);
}

//for..in (มอง array เป็น object ประเภทหนึ่งได้)

// <key>:<value> => <index>:<value>
const arr = {
    0:"bird",
    1:"Cat",
    2:"Dog",
}

//ไม่ต้องกำหนด i เอง
for(let index in animals) {
    log(index, animals[index]);
}

//4C: for...of
for(let element of animals) {
    //1st : element = "Snake"
    //2nd : element = "Mountain Bird"
    //3rd : element = "Spider"
    //4th : element = "Cat"
    //5th : element = "Elephant"
    log(element);
}

//Aside Topic : Higher Order Function
function add(x,y) {
    return x+y;
}
log(add(5,6));

//Function Expression : FN as a value
const a = console.log;
const b = alert;
// a('Hi');
// b('Hello');

//สร้าง Function รับ parameter เป็น function
function addAndShow(x, y, showFn){
    let result = x + y;
    //call showFn
    showFn(`result is : ${result}`);
    return result;
}

function show(result) {
    console.log(result);
}

addAndShow(5, 10, show); //
addAndShow(5, 10, console.log);
//fn == console.log

//Main FN : Higher Order Function (ฟังก์ชั่นที่รับฟังก์ชั่นเป็น parameter)
//fn1,fn2,fn3 : Callback

//fn1,fn2,fn3 จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น
//fn1,fn2,fn3 (ถูกเรียกทีหลัง : callback)
function cook(fn1,fn2,fn3){
    fn1();
    fn2();
    fn3();
}
//Sub-fn
function step1(){
    log('1.Prepare ingredient');
}
function step2(){
    log('2.cooking');
}
function step3(){
    log('3.serve');
}
cook(step1,step2,step3);

//
const items = ['Football', 'Bag', 'Dish', 'Fork'];

//4d : forEach
//Syntax : <array>.forEach(FN)
//array == Caller
//Higher order FN == forEach (รับพารามิเตอร์เป็น FN)

//item.forEach( function() {})
items.forEach(function(){
    console.log('Hi');
});

function iterateFn(){
    console.log('Hi');
}
items.forEach(iterateFn);

//
const iterateFn = (element) => console.log(element);

items.forEach(iterateFn);
//1st Loop : ("Football") => console.log("Football")
//2nd Loop : ("Bag") => console.log("Bag")
//3rd Loop : ("Dish") => console.log("Dish")

const iterateFn = (item,index,array) => console.log(index, item);

items.forEach(iterateFn);
//
items.forEach((a, b, c,) => {
    console.log(`At index ${b}, element = ${a}`);
});

