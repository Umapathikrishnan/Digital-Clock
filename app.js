setInterval(clockFunc,1000);
function clockFunc(){
 let time =new Date();
 let hours=time.getHours();
 let minutes=time.getMinutes();
 let seconds=time.getSeconds();
 let t=hours+" hr :"+minutes+"  min :"+seconds+" sec";
 console.log(t);
 let clock=document.querySelector(".clock");
 clock.textContent=t;
}
setInterval(displayDate,1000);
function displayDate()
{
//lets work on displaying day 
let time =new Date();
let day=time.getDate();
let month_int=time.getMonth();
let year=time.getFullYear();
if (month_int===0)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" JAN "+year;
}
else if (month_int===1)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" FEB "+year;
}
else if (month_int===2)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" MAR "+year;
}
else if (month_int===3)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" APR "+year;
}
else if (month_int===4)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" MAY "+year;
}
else if (month_int===5)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" JUN "+year;
}
else if (month_int===6)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" JUL "+year;
}
else if (month_int===7)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" AUG "+year;
}
else if (month_int===8)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" SEPT "+year;
}
else if (month_int===9)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" OCT "+year;
}
else if (month_int===10)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" NOV "+year;
}
else if (month_int===11)
{
 let month_str=document.querySelector(".day");
 month_str.textContent=day+" DEC "+year;
}
}