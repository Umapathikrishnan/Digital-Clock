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
clockFunc();