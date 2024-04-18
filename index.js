let array=[1 , 2 , 4 , 7];

array.push("javascript", "python" ); 
console.log( array);
array.unshift("html " , "css");
console.log(array.length);
array.shift();
array.pop();
console.log(array);

let array2=["ფორთოხალი", "ბანანი", "მსხალი"];
console.log(array2.length);
array2.push("ვაშლი", " ანანასი");
array2.unshift("საზამთრო");
console.log(array2);
let newarray2= array2.splice(0,2);
console.log(newarray2);
newarray2.push("მანგო");
let newarray2_2=newarray2.concat(array2)
console.log(newarray2_2);

let array3 =[1, 2, 3, 4, 5];
 let newarray3=array3.splice(0,3);
newarray3.push("a" ,"b","c")
let newarray3_3 =newarray3.concat(array3);
console.log(newarray3_3);


let arr = [1, 2, 3, 4, 5];
let sum= 0;
arr.forEach((elem) => {
    sum=sum+ elem;
})
console.log(sum);
   
for(i=100; i>0 ; i--){
    console.log(i);
}

let array4=[2,15,10,24]
let newarray4= array4.splice(0,3)
newarray4.pop();
let newarray4_4=newarray4.concat(array4);
console.log(newarray4_4);

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray5=array5.map((elem)=> {
    return elem /3 ;
})
console.log(newarray5);

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newlang=languages.filter((elem)=> { 
    if(elem.charAt()>3){
        return true;
    }
 }
)
console.log(newlang);

let words = ['madrid', 'rome', 'milan', 'berlin'];
let newwords= words.filter((elem)=>{elem.includes("m")
return true} )
console.log(newwords);

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let newarr= arr1.concat(arr2);
let newarr1=newarr.concat(arr3);
console.log(newarr1);

let arr4= [-1, -2, -3, 4];
let newarr4= arr4.some((elem)=> { elem >0 
return true} )
console.log(newarr4);

let array7 =[23,45,32,5,87,7,3,98] ;
console.log( array7.sort((a , b)=> b - a ));
