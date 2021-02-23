var ob = "Aashvi"//string
console.log(typeof ob);

var ob2="24";//string
console.log(typeof ob2);

var ob3=444;//number
console.log(typeof ob3);

var ob4 //undefined
console.log(typeof ob4);

var arr=[10,20,30,40,60,"Aashvi"]
console.log(arr)

//will "aashvi" be counted as element

for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr.push("A");
arr.push(45)
console.log(arr)

var b=[]
b.push(25)
b.push(17)
console.log(b);
b.pop();
console.log(b)

var c=[[10,20],[40,50],[60,70]]
console.log(c);
for (var i=0;i<c.length;i++){
    console.log(c[i][0]+"   " + c[i][1])
}

