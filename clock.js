setInterval(()=>{

d= new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hRotaion = 30*htime + mtime/2;
mRotation = 6*mtime;
sRotation = 6*stime;   
hour.style.transform = `rotate(${hRotaion}deg)`;
minute.style.transform = `rotate(${mRotation}deg)`;
second.style.transform = `rotate(${sRotation}deg)`; 

},1000);