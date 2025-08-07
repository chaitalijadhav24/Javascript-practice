// function myAlert(){
//     alert("Hello")
// }
// myAlert()

function myApp(name, city){
    let x="My name is "+name+" I from "+city
    console.log(x)
}
myApp("Chaitali","Ambajogai")



function myDisplay(state, country){
    let x=`State is ${state} Country ${country}`
    console.log(x)
}
myDisplay("Maharashtra","India")


const myData=(id,book,author,contact)=>{
    let x=`Id=${id}\nBook=${book}\nAuthor=${author}\n Contact=${contact}`
    console.log(x)
}
myData(123,"Javascript","John", 9876543210)


let obj={
    name:"Chaitali",
    city:"Banglore",
    myApp:function (state, country){
        let x=`Name=${this.name}\ncity${this.city}\nstate${state}\ncountry${country}`
        console.log(x)
    }
}
obj.myApp("Karnataka","India")


 function myApp1(x){
     console.log("1st function")
 }

 function myApp2(y){
     console.log("2nd function")
 }

 function myApp3(a,b,c){
     console.log("3rd function")
     a()
     b()
     c()
 }

 function myApp4(z){
     console.log("4th function")
 }
 myApp3(myApp1, myApp2, myApp4)


 setTimeout(function myData(){
     console.log("Frontend")
 },2000)

 setTimeout(function(){
     console.log("Backend")
 },3000)

    setTimeout(()=>{
     console.log("FullStack")
 },4000)

 setTimeout(function myAlert(){
     alert("Good Night")
 },5000)

 setInterval(function(){
     console.log("Good Night")
 },5000)

 //Sync function 
 console.log("1st Statement")
 console.log("2nd Statement")
 console.log("3rd Statement")

 //async function
 console.log("Start")
 setTimeout(()=>{
     console.log("Midlle")
 },3000)

 console.log("End")


 let x=new Promise((resolve,reject)=>{
     let a=200
     let b=300
     if(a=="100" || b==="300"){
         resolve("Success")
     }
     else{
         reject("Failure")
     }
 })
 x.then((res)=>{
     console.log(x)
 })
 .catch((error)=>{
     console.log(x)
 })


 async function myData() {
     console.log("start")
 let x=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("Success")
         console.log("Middle")
     },3000)
 })    
 let y=await x
 console.log(x)
 console.log("end")
 }
 myData()

 function Data(){
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
         return res.json()
     })
     .then((response)=>{
         console.log(response)
     })
     .catch((error)=>{
         console.log(error)
     })
}
 Data()