const DAYS = 6;
const LIMIT = 30;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let studentReport = [11,42,33,64,29,37,44];
let dateIndex = new Intl.DateTimeFormat("en-US" ).format(new Date());
const todayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());
function logMinimums(DAYS,LIMIT,studentReport){
    max=studentReport.length
    for(let i=0;i<max;i++){
        if(studentReport[i]<LIMIT){
            console.log(studentReport[i]);
        }
    }
   
}
function logMinimums3(DAYS,LIMIT,studentReport){
    studentReport.forEach(function(element){
        if (element<LIMIT) {
            console.log(element);
        }
    });
}
function logMinimums2(DAYS,LIMIT,studentReport){
    len=studentReport.length;
    let i=0;
    while (i<len){
        if (studentReport[i]<LIMIT) {
            console.log(studentReport[i]);
        }
    i++;
    }
    
}
function logMinimums4(DAYS,LIMIT,studentReport){
    for(let index in studentReport){
        if (studentReport[index]<LIMIT) {
            console.log(studentReport[index]);
        }
    }
    
}
let d = new Date();
console.log(d.getTime());
console.log(d.getDate());
let dayOfWeek=d.getDay();
for(let i=0;i<DAYS;i++){
    displayDay=dayOfWeek+i;
    console.log(weekday[displayDay%7]);
   
}
console.log(dayOfWeek);
//logMinimums4(DAYS,LIMIT,studentReport);