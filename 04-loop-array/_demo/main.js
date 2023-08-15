
function myForEach(fn) {
    // code
    for(i=0; i<5; i++) {

        fn(`Index = ${i}`);
    }
    // code
}

myForEach(() => console.log(a));
//
[1, 2, 3, 4].forEach((a,b) => console.log(a));
//forEach(a,b,c) =aคือค่าในarray bคือindex แสดงค่าของindex cคือ arrayทั้งหมด

