// document.write("hello world")


// x=[{"name":"Claire","dob":"2001"},{"name":"Mwesh","dob":"2004"}]
// x = "3" + 2 + 5
// y =2+6+"9"
//x = "Makena"
// y = -1 ; c = 4; 
// g = (y*x)/c
// console.log(x[0])
// alert("danger")

// a = 4
// d = 6
// console.log(a==1 || d==6)
// console.log(a != d)
// console.log(a == d)
// console.log(a >= d)
// console.log(a <= d)
// confirm("are you sure you want to delete")
// let name1 = prompt("please enter your name")
// alert("my name is " +name1)

// if(name!==""){
//     alert("your name is "+name)
// }else{
//     alert("sorry you did not provide a name")
// }

// if(y>=0){
//     alert("the value of y is "+y)
// }else if(c>=0){
//     alert("the value of c is "+c)
// }else{
//     alert("no value was provided")
// }

// if (c>=0 || y>=0){
//     alert("the value of c, y is "+c+": "+y)
// }else{
//     alert("no value was provided")
// }


// ternary operator
// alert(y>=0 || c>=0 ? "the value of c , y is "+c+ ","+y : "no value was provided")


// let greeting = "goodday"
// let hour = 24
// if(hour < 18){
//     greeting =" goodday";
// }else{
//     greeting=" good evening";
// }
// console.log(greeting)

// let age = 60
// let result = (age > 59 )?
//     "senior citizen" : "junior citizen"
// console.log(result)

// let marks = 95
// let results = (marks < 40) ? "fail":
//                (marks < 50) ? "pass":
//                 (marks < 60) ? "credit":
//                 (marks < 70) ? "distinction" :"hhh"
// console.log(results)    

// let stream = ""
// let subjects = []
// switch(stream){
//     case "A" : 
//         subjects = ["maths", "eng", "swa"];
//         break;

//     case "B" : 
//         subjects = ["chem", "bio", "phyc"];
//         break;

//     case "C" : 
//         subjects = ["geo", "hist", "cre"];
//         break;

//     case "D" : 
//         subjects = ["comp", "agri", "bs"];
//         break;
//     default:
//         subjects = ["german", "french", "spanish"]
//         break;
// }
// console.log(subjects)

// var x= 1, r= 10
// do {
//     console.log(x)
//     x++;
// } while (x<=r);

// let u=2, v=15
// do {
//     console.log(v)
//     v--;
// } while (u<=v);


// let x=1
// do {
//     console.log("printing copy" + x)
//     x++;
//     var printinganothercopy= confirm("do you want to print another copy?")
// } while (
//     printinganothercopy==true
// );

// let i=10;
// for (let i = 0; i < 10; i++) {
//     document.write(i+"<br>");  
// }


// let furniture=["chairs", "tables", "desks"]
// furniture.length
// for (let i=0; i<furniture.length; i++) {
//     console.log(furniture[i])   
// }
// // console.log(furniture)
// // for (let f= 1; f <= 10; f++) {
// //     document.write(furniture +"<br>")
// //     }

// var stationary = ["pens", "pensils","sharpener", "ruler"]
// stationary.length
// for (let i = 0; i < stationary.length; i++) {
//     document.write(stationary[i],"<br>");
// }

// var students = [{"studentno" : "001" , "fullname" : "Makena"},
//                 {"studentno" : "002" , "fullname" : "Claire"},
//                 {"studentno" : "003" , "fullname" : "Hilda"},
//                 {"studentno" : "004" , "fullname" : "hope"},
//                 {"studentno" : "005" , "fullname" : "sarah"}]
//             students.length
//     let table = `<table><thead><th>studentno</th><th>fullname</th><thead>`
//     table+= `<tbody>`
//             for (let i = 0; i < students.length; i++) {
//                 // console.log(students[i],"<br>");
//                     table += `<tr><td>${students[i].studentno}</td>`
//                     table += `<td>${students[i].fullname}</td></tr>`
//             }
//             table+= `</tbody>`
//             table+= `</table>`
// document.write(table)

let patients = [
    {"ptname":"chris","bdno":"024","drcode":"#0001"},
    {"ptname":"john","bdno":"025","drcode":"#0032"},
    {"ptname":"amon","bdno":"026","drcode":"#0025"},
    {"ptname":"steve","bdno":"027","drcode":"#0009"},
    {"ptname":"isaac","bdno":"028","drcode":"#0015"},
    {"ptname":"chef","bdno":"029","drcode":"#0022"}
]
patients.length
let table = `<table><thead><th>ptname</th><th>bdno</th><th>drcode</th></thead>`
table += `<tbody>`
for (let i = 0; i < patients.length; i++) {
    table += `<tr><td>${patients[i].ptname}</td>`
    table += `<td>${patients[i].bdno}</td>`
    table += `<td>${patients[i].drcode}</td></tr>`   
}
table += `</tbody>`
table += `</table>`

document.write(table)
console.log(table)
let patientslist =''

let patientstable = document.querySelector("#patients")
patients.forEach(apatient=>{
    patientslist +=`<tr><td>${apatient.ptname}</td>
    <td>${apatient.bdno}</td>
    <td>${apatient.drcode}</td></tr>`
})
patientstable.innerHTML=patientslist

// let grossfield = document.getElementById("grosssalary"),
//     computepayebutton = document.getElementById("computetaxes"),
//     computedpayefield = document.getElementById("computedtax")

// computepayebutton.addEventListener("click",()=>{
//     let gross = grossfield.value
//     const paye = computetax(gross)
//     computedpayefield.innerHTML=computetax(gross)
// })

// function computetax(gross){
//     let tax = 0.3*gross
//     return tax;
// } 