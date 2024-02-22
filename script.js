

  /* console.log(name,place,food);
   for(let a=0;a<name.length||a<
    place.length||a<food.length;a++){
        console.log(a);}
    // ? html for example
    //! copy by reference
    let vari ={ num:10};
    let vari2={ num: 10};
    let vari1= vari;
    console.log(vari,vari1,vari2);
    vari.num=20;
    console.log(vari,vari1,vari2);
    
    //! copy by value

    let num = 10;
    let num1 = num;
    console.log(num,num1);
    num1 = 20;
    console.log(num,num1);
    
   let a=[10,20,30,40,50,60];
   console.log(a.length,a[0]);
   a.unshift(0);
   console.log(a.indexOf(20));
   console.log(a.unshift(0),a);*/
  /* let bio={
    name:"Kavin",
    place:"Sivagangai",
    course:"full stack"
   };
   console.log(bio);
   console.log(bio.name);
   console.log(bio.course);
   console.log(bio["place"]);
   console.log(bio["username"]);
   var i;
   console.log(i);*/
   /*let b=10
   let n=9
  if(b<n){

   var a= 1;
  }
  console.log(a);*/   
    
  // !this is arror function

 // const odd = (num1,num2) => console.log(num1*num2);

 // let a =4;
 // let b= 5;
  //odd(a,b);
//  (function hi(num1,num2)  {console.log(num1*num2)})(5,2)

// Spread Operators
//  let arr =["kavin","k"];
//  let arr1 = [3,4];
//  console.log(...arr);
//  arr2= [...arr];
//  console.log(typeof(arr2));
function fun(name,len,...args){
  console.log(name,len,args);
}
fun("kavin",3,1,2,3);
fun("prasad",4,3,4,5,6);
fun("san",6,4,5,6,7,8,8);
  