// var a=[4, 5, 6];
// var b=[1, 2, 3];
// function arrayMadness(a, b) {
//     var sum1=a.map((value, index)=>{
//       return Math.pow(value, 2)
//     }).reduce((n, m)=>n+m);
//     var sum2=b.map((value, index)=>{
//       return Math.pow(value, 3)
//     })
//     return sum1>sum2 ? true: false;
//   }
//   console.log(arrayMadness(arr1, ))

// var arr=[82, 15, 6, 38, 35];
// console.log(Math.max(...arr))

// var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.filter((value, index)=>index%2===0))
// const firstOrderFunc = () => console.log ('Hello, I am a First order function');
// const higherOrderFunc=(firstOrderFunc)=>{return firstOrderFunc};
// console.log(higherOrderFunc(firstOrderFunc));

// var arr=[4,3,9,7,2,1];
// var newarr=arr.map((value)=>{
//     if(Number.isInteger(Math.sqrt(value))){
//         return Math.sqrt(value)
//     }
//     else{
//         return Math.pow(value, 2)
//     }
// })
// console.log(newarr)
// var son=4.4123;
// console.log(son%1===0)
// var son = 14;
// console.log(Number.parseFloat(Math.sqrt(son)))

// var items=[];
// items.push({a: "b", c: "d"})
// items.push({a: "b", c: "d"})
// console.log(items)

// var arr=["h","o","l","a"];
// console.log(arr.join(','))

// var arr=[1,2, 'a'];
// console.log(arr.reduce((a,b)=>typeof a=='number'? a+b:a, 0).toString(2))

// var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ];

// var newarr=list1.map((value)=>{
//     value.greeting=`Hi ${value.firstName}, what do you like the most about ${value.language}?`
//     return value
// })
// console.log(newarr)
var list = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
function isRubyComing(list) {
var filtered=list.filter((value)=>{
  if(value.language==='Ruby'){
    return value
  }
})
 return filtered.length==1?true: false;
}
console.log(isRubyComing(list))